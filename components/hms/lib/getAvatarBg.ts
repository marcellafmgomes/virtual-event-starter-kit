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

const getInitials = (name: string | undefined) => {
  if (!name) {
    return undefined;
  } else {
    return name
      .match(/(^\S\S?|\b\S)?/g)
      ?.join('')
      ?.match(/(^\S|\S$)?/g)
      ?.join('')
      .toUpperCase();
  }
};

export const getAvatarBg = (name: string): { initials: string; color: string } => {
  const initials = getInitials(name);
  const indexFactor = 20;
  const colorIndex = ((initials?.codePointAt(0) || 0) % indexFactor) + 1;
  return { initials: initials || '', color: colorsList[colorIndex - 1] };
};

const colorsList = [
  '#F44336',
  '#3F51B5',
  '#4CAF50',
  '#FFA000',
  '#795548',
  '#E91E63',
  '#2F80FF',
  '#8BC34A',
  '#F57C00',
  '#4E342E',
  '#9C27B0',
  '#00BCD4',
  '#C0CA33',
  '#F4511E',
  '#616161',
  '#673AB7',
  '#009688',
  '#FBC02D',
  '#BF360C',
  '#455A64'
];
