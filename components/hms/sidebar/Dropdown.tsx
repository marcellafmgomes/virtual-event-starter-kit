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

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import HorizontalMenuIcon from '@components/icons/icon-menu-hor';
import { selectLocalPeerRole, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { InviteStageIcon, RemoveUserIcon } from '@100mslive/react-icons';

const Dropdown: React.FC<{ id: string; role: string }> = ({ id, role }) => {
  const actions = useHMSActions();
  const changeRole = async () => {
    const nextRole = role === 'viewer' ? 'invitee' : 'viewer';
    try {
      if (nextRole === 'invitee') {
        await actions.changeRole(id, nextRole, false);
      } else {
        await actions.changeRole(id, nextRole, true);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };
  const removePeer = async () => {
    try {
      await actions.removePeer(id, 'Bye');
    } catch (error) {
      console.log('Error: ', error);
    }
  };
  const localRole = useHMSStore(selectLocalPeerRole);
  return (
    <>
      {role === 'backstage' ? null : (
        <div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button">
                <HorizontalMenuIcon />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="min-w-[220px] bg-gray-700 rounded-lg">
              <DropdownMenu.Item asChild>
                <button
                  className={`w-full flex items-center px-2 py-3 focus:bg-gray-600 focus:outline-none text-sm rounded-lg`}
                  onClick={changeRole}
                >
                  <InviteStageIcon className="mr-2" />
                  {role === 'viewer' ? 'Bring user to stage' : 'Remove user from stage'}
                </button>
              </DropdownMenu.Item>
              {localRole?.name === 'backstage' ? (
                <DropdownMenu.Item asChild>
                  <button
                    className="w-full flex items-center px-2 py-3 focus:bg-gray-600 focus:outline-none text-sm rounded-lg"
                    onClick={removePeer}
                  >
                    <RemoveUserIcon className="mr-2" /> Remove user
                  </button>
                </DropdownMenu.Item>
              ) : null}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      )}
    </>
  );
};

export default Dropdown;
