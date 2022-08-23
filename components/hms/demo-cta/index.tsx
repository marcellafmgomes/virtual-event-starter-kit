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

import styles from './index.module.css';
import cn from 'classnames';
import React from 'react';
import useClickOutside from '@lib/hooks/use-click-outside';
import * as Dialog from '@radix-ui/react-dialog';
import { CrossIcon } from '@100mslive/react-icons';
import InfoIcon from '@components/icons/icon-info';
import DemoModal from '../demo-modal';

const DemoButton = () => {
  React.useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById('cta-btn');
      el?.classList.add('show-overlay');
      const tooltip = document.getElementById('cta-tooltip');
      tooltip?.classList.add('fade-in');
    }, 3000);
  }, []);
  const ctaRef = React.useRef(null);
  const clickedOutside = () => {
    const el = document.getElementById('cta-btn');
    const tooltip = document.getElementById('cta-tooltip');
    tooltip?.remove();
    el?.classList.remove('show-overlay');
  };
  useClickOutside(ctaRef, clickedOutside);
  return (
    <Dialog.Root>
      <Dialog.Overlay className={cn(styles['overlay'])} />
      <Dialog.Trigger asChild>
        <button ref={ctaRef} id="cta-btn" className={cn(styles['cta-btn'])}>
          Try Demo
        </button>
      </Dialog.Trigger>
      <div id="cta-tooltip" className={cn(styles['tooltip'])}>
        <InfoIcon />
        Click here to demo a live webinar powered by 100ms
      </div>
      <Dialog.Content className={cn(styles['content'], 'dialog-animation')}>
        <Dialog.Close asChild className={cn(styles['close-btn'])}>
          <button>
            <CrossIcon />
          </button>
        </Dialog.Close>
        <DemoModal />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DemoButton;
