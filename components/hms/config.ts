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

export const hmsConfig = {
  /**
   * no. of tiles rendered before active speaker mode actviates
   */
  activeSpeakerThreshold: 1,
  /**
   * aspect ratio of video tiles
   */
  aspectRatio: {
    width: 1.8,
    height: 1
  },
  /**
   * maximum no.of tiles that can be rendered in speakers row
   */
  maxTileCountSpeakers: 5,
  /**
   * Turn off 100ms added things ->
   * Disable for removing Invite change role CTAs
   */
  hmsIntegration: false,
  /**
   * border color for audioLevel
   */
  audioLevelColor: '#702ec2',
  /**
   * setHmsWatermark
   */
  setHmsWatermark: true
};
