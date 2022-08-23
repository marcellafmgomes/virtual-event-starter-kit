-- Copyright 2022 Vercel Inc.
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--      http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS,
-- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
-- See the License for the specific language governing permissions and
-- limitations under the License.

create table users (
  id text primary key,
  email text unique,
  "ticketNumber" bigserial,
  name text,
  username text unique,
  "createdAt" timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table users enable row level security;

create table github_users (
  id uuid primary key default uuid_generate_v4(),
  "createdAt" timestamp with time zone default timezone('utc'::text, now()) not null,
  "userData" jsonb
);
alter table github_users enable row level security;