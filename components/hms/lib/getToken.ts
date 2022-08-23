/**
 * Copyright 2022 Vercel Inc.
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

const endPoint = process.env.NEXT_PUBLIC_HMS_TOKEN_ENDPOINT;

export const getToken = async (role: string, room_id: string): Promise<string> => {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      role: role, // backstage, stage, viewer
      room_id
    })
  });

  const { token } = await response.json();

  return token;
};
