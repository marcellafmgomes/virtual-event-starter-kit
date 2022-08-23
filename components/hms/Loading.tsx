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

import React from 'react';

interface Props {
  /**
   * Adjusts width and height
   */
  size?: number | string;
  /**
   * Color of Loader
   */
  color?: string;
}

type LoadingProps = Props & React.SVGProps<SVGSVGElement>;

export const Loading = ({ size = 24, color = 'white', ...props }: LoadingProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.8852 12C20.5009 12 21.0071 12.501 20.9311 13.1119C20.7585 14.498 20.2649 15.8303 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89471 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17293 13.7558C2.82567 12.01 3.0039 10.2004 3.68508 8.55585C4.36627 6.91131 5.51983 5.50571 6.99987 4.51677C8.16971 3.73511 9.50199 3.24152 10.8881 3.06895C11.499 2.99288 12 3.4991 12 4.11476C12 4.73042 11.4976 5.22017 10.8903 5.32108C9.94601 5.47798 9.04141 5.83408 8.23852 6.37055C7.12512 7.1145 6.25733 8.17191 5.74489 9.40905C5.23245 10.6462 5.09837 12.0075 5.35961 13.3209C5.62085 14.6342 6.26568 15.8406 7.21255 16.7875C8.15942 17.7343 9.3658 18.3791 10.6791 18.6404C11.9925 18.9016 13.3538 18.7675 14.591 18.2551C15.8281 17.7427 16.8855 16.8749 17.6294 15.7615C18.1659 14.9586 18.522 14.054 18.6789 13.1097C18.7798 12.5024 19.2696 12 19.8852 12Z"
      fill={color}
    >
      <animateTransform
        attributeType="XML"
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="0.75s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);
