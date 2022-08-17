/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ConfUser } from '@lib/types';
import { nanoid } from 'nanoid';
import Redis from 'ioredis';
import { UserData } from '@lib/hooks/use-conf-data';

const redis =
  process.env.REDIS_PORT && process.env.REDIS_URL && process.env.EMAIL_TO_ID_SECRET
    ? new Redis({
        port: parseInt(process.env.REDIS_PORT || '', 10),
        host: process.env.REDIS_URL,
        password: process.env.REDIS_PASSWORD,
        tls:
          process.env.REDIS_SSL_ENABLED && process.env.REDIS_SSL_ENABLED != 'false' ? {} : undefined
      })
    : undefined;

export async function getUserByUsername(username: string): Promise<ConfUser> {
  const [id, email, name, ticketNumber, createdAt] = await redis!.hmget(
    `username:${username}`,
    'id',
    'email',
    'username',
    'name',
    'ticketNumber',
    'createdAt'
  );
  return {
    id: id ?? '',
    email: email ?? '',
    username,
    name: name ?? '',
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : 0,
    createdAt: createdAt ? parseInt(createdAt, 10) : 0
  };
}

// Get all users from a redis database and return them as an array of ConfUser objects.
export async function getAllUsers(): Promise<ConfUser[]> {
  const keys = redis!.keys('id*');
  const users = Promise.all(
    (await keys).map(key =>
      getUserById(key)
        .then(user => {
          console.log(user);
          return user;
        })
        .catch(err => {
          console.error(err);
          return {} as ConfUser;
        })
    )
  );
  return users;
}

export async function getUserById(id: string): Promise<ConfUser> {
  const user = await redis!.hgetall(id);
  return {
    id,
    email: user.email,
    username: user.username,
    name: user.name,
    ticketNumber: parseInt(user.ticketNumber, 10),
    createdAt: parseInt(user.createdAt, 10)
  };
}

export async function createUser(id: string, email: string, name: string): Promise<ConfUser> {
  const ticketNumber = await redis!.incr('count');
  const createdAt = Date.now();
  const username = email.split('@')[0];
  await redis!.hmset(
    `id:${id}`,
    'email',
    email,
    'ticketNumber',
    ticketNumber,
    'createdAt',
    createdAt,
    'username',
    username,
    'name',
    name
  );
  return { id, email, ticketNumber, createdAt, username, name };
}

export async function getTicketNumberByUserId(id: string): Promise<string | null> {
  return await redis!.hget(id, 'ticketNumber');
}

export async function createGitHubUser(user: any): Promise<string> {
  const token = nanoid();
  const key = `github-user:${token}`;

  await redis!
    .multi()
    .hmset(key, 'id', user.id, 'login', user.login, 'name', user.name || '')
    .expire(key, 60 * 10) // 10m TTL
    .exec();
  return token;
}

export async function updateUserWithGitHubUser(
  id: string | null,
  token: string | null,
  ticketNumber: string | null
): Promise<UserData> {
  const [username, name] = await redis!.hmget(`github-user:${token}`, 'login', 'name');
  if (!username) {
    console.log(new Error('Invalid or expired token').message);
  }

  const key = `id:${id}`;
  const userKey = `user:${username}`;

  await redis!
    .multi()
    .hsetnx(key, 'username', username || '')
    .hsetnx(key, 'name', name || '')
    // Also save username → data pair
    .hsetnx(userKey, 'name', name || '')
    .hsetnx(userKey, 'ticketNumber', ticketNumber || '')
    .exec();

  return { id, ticketNumber, username, name } as UserData;
}
