import { selectLocalPeerRole, useHMSStore } from '@100mslive/react-sdk';
import { useRouter } from 'next/router';
import { useState } from 'react';

const RoomCta = () => {
  const role = useHMSStore(selectLocalPeerRole);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const copy = () => {
    let stageId = `a`;
    if (router.isReady) {
      stageId = router.query.slug as string;
    }
    navigator.clipboard.writeText(`${window.location.host}`);
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
      </div>
    </div>
  );
};

export default RoomCta;
