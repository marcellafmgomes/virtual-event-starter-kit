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
import { useHMSActions, useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';
import { getToken } from './lib/getToken';
import Join from './Join';
import Live from './Live';
import { useRouter } from 'next/router';

interface Props {
  stagePeers: string[];
  backstagePeers: string[];
  roomId: string;
}

/**
 * Entry components for 100ms
 */
const Room = ({ roomId, stagePeers, backstagePeers }: Props) => {
  const router = useRouter();
  const [token, setToken] = React.useState('');
  const actions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  React.useEffect(() => {
    if (!router.isReady) return;
    const role = router.query.role ? (router.query.role as string) : 'viewer';
    getToken(role, roomId)
      .then(t => setToken(t))
      .catch(e => console.error(e));
  }, [roomId, backstagePeers, stagePeers, router.query, router.isReady]);
  React.useEffect(() => {
    window.onunload = () => {
      actions.leave();
    };
  }, [actions]);
  return (
    <>
      {isConnected ? (
        <Live />
      ) : (
        <Join role={router.query.role ? (router.query.role as string) : 'viewer'} token={token} />
      )}
    </>
  );
};

export default Room;
