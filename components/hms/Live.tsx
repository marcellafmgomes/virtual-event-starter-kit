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
import Footer from './Footer';
import Header from './Header';
import List from './Conference';
import toast, { Toaster } from 'react-hot-toast';
import { useHMSNotifications } from '@100mslive/react-sdk';
import DemoModal from './DemoModal';

/**
 * Live Video/Audio component
 */
const Live = () => {
  return (
    <div className="flex justify-center items-center relative flex-col h-full">
      <Notification />
      <Header />
      <List />
      <Footer />
      {process.env.NEXT_PUBLIC_LIVE_DEMO === 'true' ? <DemoModal /> : null}
    </div>
  );
};

export default Live;

const Notification = () => {
  const notification = useHMSNotifications();
  React.useEffect(() => {
    if (!notification) {
      return;
    }
    if (notification.type === 'RECONNECTING') {
      toast.error(
        'You are offline for now. while we try to reconnect, please check your internet connection.'
      );
    }
    if (notification.type === 'RECONNECTED') {
      toast.success('You are now connected.');
    }
    if (notification.type === 'ERROR') {
      toast.error(`Error: ${notification.data.message}`);
    }
  }, [notification]);

  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        style: {
          background: 'var(--accents-7)',
          color: 'var(--accents-1)'
        }
      }}
    />
  );
};
