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

import { Sponsor } from '@lib/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './sponsor-section.module.css';

type Props = {
  sponsor: Sponsor;
};

export default function SponsorSection({ sponsor }: Props) {
  return (
    <>
      <Link href="/expo">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Voltar para patrocinadores
        </a>
      </Link>
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={styles['name-and-logo']}>
            <Image
              alt={sponsor.name}
              src={sponsor.logo.url}
              className={styles.image}
              loading="lazy"
              title={sponsor.name}
              height={64}
              width={64}
            />
            <h1 className={styles.name}>{sponsor.name}</h1>
          </div>
          <p className={styles.description}>{sponsor.description}</p>
          <div className={styles['sponsor-details']}>
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className={styles.button}
            >
              {sponsor.name}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
