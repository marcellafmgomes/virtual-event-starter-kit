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

import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '@components/layout';
import Page from '@components/page';
import SpeakerSection from '@components/speaker-section';

import { getAllSpeakers } from '@lib/cms-api';
import { Speaker } from '@lib/types';

type Props = {
  speaker: Speaker;
};

export default function SpeakerPage({ speaker }: Props) {
  const meta = {
    title: 'SAUDHE - Seminário de Administração Pública, Direitos Humanos e Servidores',
    description: 'Palestra sobre o tema: ' + speaker.talk.title
  };

  return (
    <Page meta={meta}>
      <Layout>
        <SpeakerSection speaker={speaker} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const speakers = await getAllSpeakers();
  const currentSpeaker = speakers.find((s: Speaker) => s.slug === slug) || null;

  if (!currentSpeaker) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      speaker: currentSpeaker
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const speakers = await getAllSpeakers();
  const slugs = speakers.map((s: Speaker) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
