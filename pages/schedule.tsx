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

import { GetStaticProps } from 'next';

import Header from '@components/header';
import Layout from '@components/layout';
import Page from '@components/page';
import Schedule from '@components/schedule';

import { getAllSchedules } from '@lib/cms-api';
import { META_DESCRIPTION } from '@lib/constants';
import { ScheduleType } from '@lib/types';

type Props = {
  allSchedules: ScheduleType[];
};

export default function SchedulePage({ allSchedules }: Props) {
  const meta = {
    title: 'Cronograma - Seminário de Administração Pública, Direitos Humanos e Servidores',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Cronograma" description={meta.description} />
        <Schedule allSchedules={allSchedules} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allSchedules = await getAllSchedules();

  return {
    props: {
      allSchedules
    },
    revalidate: 60
  };
};
