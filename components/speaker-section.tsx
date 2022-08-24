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

import { Speaker } from '@lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import styles from './speaker-section.module.css';

type Props = {
  speaker: Speaker;
};

export default function SpeakerSection({ speaker }: Props) {
  return (
    <>
      <Link href="/speakers">
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
          Voltar para palestrantes
        </a>
      </Link>
      <div key={speaker.name} className={styles.container}>
        <div style={{ minWidth: '300px' }}>
          <Image
            alt={speaker.name}
            title={speaker.name}
            src={speaker.image.url}
            className={styles.image}
            loading="lazy"
            height={400}
            width={300}
          />
        </div>
        <div className={styles['speaker-details']}>
          <div>
            <h1 className={styles.name}>{speaker.name}</h1>
            <p className={styles.title}>
              {`${speaker.title} @ `}
              <span className={styles.company}>{speaker.company}</span>
            </p>
            <h2 className={styles['bio-header']}>Bio</h2>
            <p className={styles.bio}>{speaker.bio}</p>
            <h3 className={styles['socials-header']}>Social Media</h3>
            <div id="socials" className={styles['socials-container']}>
              {speaker.linkedin ? (
                <SocialIcon
                  aria-label="Linkedin"
                  network="linkedin"
                  url={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              ) : (
                <SocialIcon
                  aria-label="Linkedin"
                  network="linkedin"
                  bgColor="#D8D8D8"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              )}
              {speaker.twitter ? (
                <SocialIcon
                  aria-label="Twitter"
                  network="twitter"
                  url={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              ) : (
                <SocialIcon
                  aria-label="Twitter"
                  network="twitter"
                  bgColor="#D8D8D8"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              )}
              {speaker.instagram ? (
                <SocialIcon
                  aria-label="Instagram"
                  network="instagram"
                  url={speaker.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              ) : (
                <SocialIcon
                  aria-label="Instagram"
                  network="instagram"
                  bgColor="#D8D8D8"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              )}
              {speaker.facebook ? (
                <SocialIcon
                  aria-label="Facebook"
                  network="facebook"
                  url={speaker.facebook ?? ''}
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              ) : (
                <SocialIcon
                  aria-label="Facebook"
                  network="facebook"
                  bgColor="#D8D8D8"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              )}
              {speaker.tiktok ? (
                <SocialIcon
                  aria-label="TikTok"
                  network="tiktok"
                  url={speaker.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              ) : (
                <SocialIcon
                  aria-label="TikTok"
                  network="tiktok"
                  bgColor="#D8D8D8"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              )}
              {speaker.youtube ? (
                <SocialIcon
                  aria-label="Youtube"
                  network="youtube"
                  url={speaker.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              ) : (
                <SocialIcon
                  aria-label="Youtube"
                  network="youtube"
                  bgColor="#D8D8D8"
                  style={{ height: 35, width: 35, marginRight: '1rem' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {speaker.talk && (
        <div className={styles['talk-details']}>
          <h3 className={styles['socials-header']}>{speaker.talk.title}</h3>
          <p>{speaker.talk.description}</p>
        </div>
      )}
    </>
  );
}
