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

interface LinkButtonProps {
  type?: JSX.IntrinsicElements['button']['type'];
  variant?: 'secondary' | 'primary' | 'danger';
  className?: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps & JSX.IntrinsicElements['a']> = ({
  variant = 'primary',
  className = '',
  children,
  href = '/',
  ...props
}) => {
  const baseClass = `flex items-center justify-center rounded-lg p-2 cursor-pointer disabled:cursor-not-allowed focus:outline-none text-white`;
  let variantClass = ``;
  if (variant === 'danger') {
    variantClass = `bg-red-500 hover:bg-red-600 focus:bg-red-400`;
  } else if (variant === 'secondary') {
    variantClass = `bg-gray-600 hover:bg-gray-500 focus:bg-gray-400`;
  } else {
    variantClass = `bg-brand-300 hover:bg-brand-200 focus:bg-brand-400`;
  }
  return (
    <a className={cn(baseClass, variantClass, className)} href={href} {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
