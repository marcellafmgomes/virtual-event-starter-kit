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

import { useCallback, useEffect, useMemo } from 'react';
import {
  useHMSActions,
  useHMSStore,
  HMSRoomState,
  selectIsConnectedToRoom,
  selectRoomState,
  hooksErrHandler
} from '@100mslive/react-sdk';
import { HMSConfig } from '@100mslive/hms-video';

export interface usePreviewInput {
  /**
   * name of user who is joining, this is only required if join is called
   */
  name: string;
  /**
   * app side authentication token
   */
  token: string;
  /**
   * any extra metadata info for the peer
   */
  metadata?: string;
  /**
   * function to handle errors happening during preview
   */
  handleError?: hooksErrHandler;
}

export interface usePreviewResult {
  /**
   * enable the join button for the user only when this is true
   */
  enableJoin: boolean;
  /**
   * call this function to join the room
   */
  join: () => void;
  /**
   * once the user has joined the room, till leave happens this flag will be true. It can be used
   * to decide to show between preview form and conferencing component/video tiles.
   */
  isConnected: boolean;
}

/**
 * This hook can be used to build a preview UI component, this lets you call preview everytime the passed in
 * token changes. This hook is best used in combination with useDevices for changing devices, useAVToggle for
 * muting/unmuting and useAudioLevelStyles for showing mic audio level to the user.
 * Any device change or mute/unmute will be carried across to join.
 */
export const usePreview = ({ name, token, metadata }: usePreviewInput): usePreviewResult => {
  const actions = useHMSActions();
  const roomState = useHMSStore(selectRoomState);
  const isConnected = useHMSStore(selectIsConnectedToRoom) || false;
  const enableJoin = roomState === HMSRoomState.Preview;

  const config: HMSConfig = useMemo(() => {
    return {
      userName: name,
      authToken: token,
      metaData: metadata,
      rememberDeviceSelection: true,
      initEndpoint: process.env.NEXT_PUBLIC_HMS_INIT_PEER_ENPOINT || undefined
    };
  }, [name, token, metadata]);

  useEffect(() => {
    (async () => {
      if (!token) {
        return;
      }
      if (roomState !== HMSRoomState.Disconnected) {
        await actions.leave();
      }
      try {
        await actions.preview(config);
      } catch (err) {
        console.log('Error: ', err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions, token]);

  const join = useCallback(() => {
    if (!token) {
      return;
    }
    try {
      actions.join(config);
    } catch (err) {
      console.log('Error: ', err);
    }
  }, [actions, token, config]);

  return {
    enableJoin,
    join,
    isConnected
  };
};
