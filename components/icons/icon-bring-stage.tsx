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

const BringToStageIcon = () => (
  <svg
    width={20}
    style={{ marginRight: '10px' }}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.889 3.333v12.445a.889.889 0 11-1.778 0M5.111 15.778v-8.89"
      stroke="#fff"
      strokeWidth={1.067}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.111 15.778a.889.889 0 11-1.778 0V4.222a.889.889 0 01.89-.889h11.555a.889.889 0 01.889.89v11.555a.889.889 0 11-1.778 0v-.89M6.889 15.333H9.11"
      stroke="#fff"
      strokeWidth={1.067}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13.111v-1.333a2.222 2.222 0 114.444 0v1.333h-.888l-.445 3.556h-1.778l-.444-3.556H10zM10.444 6.889a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0v0z"
      stroke="#fff"
      strokeWidth={1.067}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BringToStageIcon;
