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

/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import Button from './Button';
import { InviteIcon, PersonIcon } from '@100mslive/react-icons';
import { selectLocalPeerRole } from '@100mslive/react-sdk';
import { useHMSStore } from '@100mslive/react-sdk';
import { useRouter } from 'next/router';

const EmptyRoom = () => {
  const role = useHMSStore(selectLocalPeerRole) || 'viewer';
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const copy = () => {
    let stageId = `a`;
    if (router.isReady) {
      stageId = router.query.slug as string;
    }
    // @ts-ignore
    navigator.clipboard.writeText(`${window.location.host}/stage/${stageId}?role=${role.name}`);
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div
      className="flex flex-col justify-center items-center text-center"
      style={{ height: 'calc(100vh - 3.2 * var(--header-height))' }}
    >
      <h2 className="text-3xl ">Nenhum Palestrante presente</h2>
      <p className="text-gray-300 text-sm">
        Looks like nobody has joined as a speaker. Invite someone to speak or change your role.
      </p>
      <div className="flex space-x-4 mt-8">
        <div className="relative">
          {copied ? (
            <p className="absolute top-12 left-0 flex bg-gray-600 justify-center  rounded-lg w-48 p-2">
              Copied to clipboard!
            </p>
          ) : null}
          <Button onClick={() => copy()} variant="secondary">
            <InviteIcon className="mr-2" /> Invite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyRoom;
