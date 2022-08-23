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

import * as React from 'react';
import { SVGProps } from 'react';

const IconFitScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 10.5a1 1 0 0 1-1-1v-3A1.5 1.5 0 0 1 6.5 5h3a1 1 0 1 1 0 2H7.25a.25.25 0 0 0-.25.25V9.5a1 1 0 0 1-1 1ZM18 10.5a1 1 0 0 1-1-1V7.25a.25.25 0 0 0-.25-.25H14.5a1 1 0 1 1 0-2h3A1.5 1.5 0 0 1 19 6.5v3a1 1 0 0 1-1 1ZM17.5 19h-3a1 1 0 0 1 0-2h2.25a.25.25 0 0 0 .25-.25V14.5a1 1 0 0 1 2 0v3a1.5 1.5 0 0 1-1.5 1.5ZM9.5 19h-3A1.5 1.5 0 0 1 5 17.5v-3a1 1 0 1 1 2 0v2.25a.25.25 0 0 0 .25.25H9.5a1 1 0 0 1 0 2Z"
      fill="#fff"
    />
  </svg>
);

export default IconFitScreen;
