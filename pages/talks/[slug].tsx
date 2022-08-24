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

import TalkSection from '@components/talk-section';
import { getAllTalks } from '@lib/cms-api';
import { META_DESCRIPTION } from '@lib/constants';
import { Talk } from '@lib/types';

type Props = {
  talk: Talk;
};

export default function SchedulePage({ talk }: Props) {
  const meta = {
    title: 'SAUDHE - Seminário de Administração Pública, Direitos Humanos e Servidores',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        <TalkSection talk={talk} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const talks = await getAllTalks();
  const currentTalk = talks.find((s: Talk) => s.slug === slug) || null;

  if (!currentTalk) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      talk: currentTalk
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const talks = await getAllTalks();
  const slugs = talks.map((s: Talk) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
