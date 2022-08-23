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

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        sky: {
          100: 'var(--accents-1)',
          200: 'var(--accents-2)',
          300: 'var(--accents-3)',
          400: 'var(--accents-4)',
          500: 'var(--accents-5)',
          600: 'var(--accents-6)',
          700: 'var(--accents-7)',
          800: 'var(--accents-8)'
        },
        'sky-main': 'var(--sky)',
        'sky-base': 'var(--sky1)',
        secondary: 'var(--secondary-color)',
        sidebar: 'var(--sidebar)',
        brand: {
          100: 'var(--brand-lighter)',
          200: 'var(--brand-light)',
          300: 'var(--brand)',
          400: 'var(--brand-dark)'
        }
      },
      fontSize: {
        xxs: '10px',
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)'
      },
      minWidth: {
        btn: '160px'
      }
    }
  },
  plugins: []
};
