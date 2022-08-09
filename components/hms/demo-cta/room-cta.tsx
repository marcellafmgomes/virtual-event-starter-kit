import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CrossIcon, PersonIcon } from '@100mslive/react-icons';
import DemoModal from '../demo-modal';
import InviteIcon from '@components/icons/icon-invite';
import { useHMSStore, selectLocalPeerRole } from '@100mslive/react-sdk';
import { useRouter } from 'next/router';
import Button from '../Button';

const RoomCta = () => {
  const role = useHMSStore(selectLocalPeerRole);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const copy = () => {
    let stageId = `a`;
    if (router.isReady) {
      stageId = router.query.slug as string;
    }
    navigator.clipboard.writeText(
      `${window.location.host}/stage/${stageId}?role=${role?.name || 'viewer'}`
    );
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        {copied ? (
          <p className="absolute top-12 left-0 flex bg-gray-600 justify-center  rounded-lg w-48 p-2">
            Copiado o link para o convite!
          </p>
        ) : null}
        <Button variant="secondary" className="h-[40px]" onClick={() => copy()}>
          <InviteIcon className="mr-2" />
          Invite
        </Button>
      </div>

    </div>
  );
};

export default RoomCta;


