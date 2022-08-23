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

import { useHMSStore, selectLocalPeerRole } from '@100mslive/react-sdk';
import React from 'react';
import Chat from './Chat';
import Participants from './Participants';
import ScheduleSidebar from '@components/schedule-sidebar-individual';
import { Stage } from '@lib/types';
import * as Tabs from '@radix-ui/react-tabs';

type Props = {
  allStages: Stage[];
};

const Sidebar = ({ allStages }: Props) => {
  const localRole = useHMSStore(selectLocalPeerRole);
  return (
    <Tabs.Root asChild defaultValue="1">
      <div className="sidebar-container">
        <Tabs.List className="w-full px-4 tabs">
          <Tabs.Trigger asChild value="1">
            <button className="w-1/2 text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-l-md">
              Chat
            </button>
          </Tabs.Trigger>

          {localRole?.name === 'viewer' || localRole?.name === 'invitee' ? (
            <Tabs.Trigger asChild value="3">
              <button className="w-1/2  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md">
                Schedule
              </button>
            </Tabs.Trigger>
          ) : (
            <Tabs.Trigger asChild value="2">
              <button className="w-1/2  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md">
                Participants
              </button>
            </Tabs.Trigger>
          )}
        </Tabs.List>
        <Tabs.Content asChild value="1">
          <Chat />
        </Tabs.Content>
        <Tabs.Content asChild value="2">
          <Participants />
        </Tabs.Content>
        <Tabs.Content asChild value="3">
          <ScheduleSidebar allStages={allStages} />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Sidebar;
