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

import { SVGProps } from 'react';

const LeaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.333 3.375a1.827 1.827 0 0 0-1.772 1.89v13.47a1.828 1.828 0 0 0 1.772 1.89h9.205a1.828 1.828 0 0 0 1.773-1.89v-3.36a.75.75 0 0 0-1.5 0v3.409a.328.328 0 0 1-.297.341H5.357a.328.328 0 0 1-.297-.341V5.216a.327.327 0 0 1 .297-.341h9.157a.328.328 0 0 1 .298.341l-.001.034v3.375a.75.75 0 0 0 1.5 0v-3.36a1.828 1.828 0 0 0-1.773-1.89H5.333Zm12.51 5.285a.75.75 0 0 1 1.06 0l2.813 2.813a.747.747 0 0 1 0 1.06l-2.813 2.813a.75.75 0 1 1-1.06-1.06l1.532-1.533H9.373a.75.75 0 0 1 0-1.5h10.002l-1.532-1.532a.75.75 0 0 1 0-1.06Z"
      fill="#fff"
    />
  </svg>
);

export default LeaveIcon;
