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

import { GetStaticProps, GetStaticPaths } from 'next';
import Error from 'next/error';
import Head from 'next/head';
import { SkipNavContent } from '@reach/skip-nav';
import { getAllUsers } from '@lib/db-api';

import Page from '@components/page';
import ConfContent from '@components/index';
import { SITE_URL, SITE_NAME, META_DESCRIPTION, SAMPLE_TICKET_NUMBER } from '@lib/constants';
import { ConfUser } from '@lib/types';

type Props = {
  user: ConfUser;
};

export default function TicketShare({ user }: Props) {

  const meta =
      {
        title: `${user.name}’s ${SITE_NAME} Ticket`,
        description: META_DESCRIPTION,
        image: `/api/ticket-images/${user.username}`,
        url: `${SITE_URL}/tickets/${user.username}`
      }


  return (
    <Page meta={meta}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <SkipNavContent />
      <ConfContent
        defaultUserData={{
          id: user.id,
          username: user.username,
          name: user.name,
          ticketNumber: user.ticketNumber
        }}
        sharePage
      />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const username = params?.username;
  const users = await getAllUsers();
  const currentUser = users.find((u: ConfUser) => u.username === username) || null;

  if (!currentUser) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      user: currentUser
    },
    revalidate: 60
  };
};


export const getStaticPaths: GetStaticPaths = async () => {
  const users = await getAllUsers();
  const usernames = users.map((user: ConfUser) => ({ params: { username: user.username } }));
  return {
    paths: usernames,
    fallback: 'blocking'
  };
};


