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
import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';

const DemoModal = () => {
  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Overlay className="fixed inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
      <Dialog.Content className="dialog-content bg-gray-700 md:w-[400px] w-[95%] rounded-lg dialog-animation">
        <h3 className="mb-4">Heads Up</h3>
        <p className="text-sm text-gray-200 my-0">
          Since this is a public demo, you might encounter other people on the stage who can hear /
          see you in case your audio/video is enabled. We recommend you to use the participants tab
          to check if there are other people on the call.
        </p>

        <Dialog.Close asChild>
          <Button className="mt-4 w-[100px]">Got it</Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DemoModal;
