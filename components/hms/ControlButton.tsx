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
  active?: boolean;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ControlButton: React.FC<Props> = ({ active, text, children, onClick, className = '' }) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        type="button"
        className={`flex items-center justify-center w-11 h-11 rounded-full border-solid border-2 ${
          active ? 'border-gray-200' : 'border-gray-base'
        } focus:outline-none focus:border-gray-400 focus:bg-gray-800 ${className}`}
      >
        {children}
      </button>
      <span className="text-xxs mt-1">{text}</span>
    </div>
  );
};

export default ControlButton;
