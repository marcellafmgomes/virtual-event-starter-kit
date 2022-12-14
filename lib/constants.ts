/**
 * Copyright 2020 Vercel Inc.
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

export const SITE_URL = 'https://saudhe.vercel.app';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'ufmg';
export const BRAND_NAME = 'SAUDHE 2022';
export const SITE_NAME_MULTILINE = ['UFMG', 'Seminário'];
export const SITE_NAME = 'UFMG Seminário';
export const META_DESCRIPTION =
  'Site do Seminário Administração Pública, Direitos Humanos e Servidores';
export const SITE_DESCRIPTION =
  'O Seminário: Administração Pública, Direitos Humanos e Servidores tem a finalidade de proporcionar a troca de conhecimento entre diferentes profissionais e ampliar as possibilidades de debates e ações  no que tange à melhoria das atividades dos agentes públicos brasileiros.';
export const DATE = '29-30 Agosto 2022';
export const SHORT_DATE = 'Ago 29 - 10:00';
export const FULL_DATE = 'Ago 29 - 10:00 (UTC-3)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/C-digo-de-Conduta-14871600b69a4e15bdf3566b25a65e6f';
export const REPO = 'https://github.com/marcellafmgomes/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Cronograma',
    route: '/schedule'
  },
  {
    name: 'Palestrantes',
    route: '/speakers'
  },
  {
    name: 'Realização',
    route: '/expo'
  }
];

export type TicketGenerationState = 'default' | 'loading';
