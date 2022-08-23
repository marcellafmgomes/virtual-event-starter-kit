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

const IconButton: React.FC<{ active?: boolean; onClick?: () => void }> = ({
  active = false,
  onClick,
  children
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-1 rounded-md ${
        active ? 'bg-white text-black' : 'icon-btn'
      }`}
      type="button"
    >
      {children}
    </button>
  );
};

export default IconButton;
