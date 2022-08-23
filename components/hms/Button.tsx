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
import cn from 'classnames';

interface ButtonProps {
  type?: JSX.IntrinsicElements['button']['type'];
  variant?: 'secondary' | 'primary' | 'danger';
  className?: string;
}

const Button: React.FC<ButtonProps & JSX.IntrinsicElements['button']> = ({
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const baseClass = `flex items-center justify-center rounded-lg px-4 py-2.5 cursor-pointer disabled:cursor-not-allowed focus:outline-none`;
  let variantClass = ``;
  if (variant === 'danger') {
    variantClass = `bg-red-500 hover:bg-red-600 focus:bg-red-400`;
  } else if (variant === 'secondary') {
    variantClass = `bg-gray-600 hover:bg-gray-500 focus:bg-gray-400`;
  } else {
    variantClass = `bg-brand-300 hover:bg-brand-200 focus:bg-brand-400`;
  }
  return (
    <button className={cn(baseClass, variantClass, className)} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
