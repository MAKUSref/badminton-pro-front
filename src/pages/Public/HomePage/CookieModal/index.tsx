import { Button } from '@mui/material';
import { useState } from 'react';

import COOKIE_PDF from '@/bin/cookies.pdf';

const CookieModal = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <>
      <div className="fixed bg-[#00000098] top-0 bottom-0 left-0 right-0 z-[90]"></div>
      <div className="fixed bottom-0 right-0 left-0 px-5 py-8 bg-[#f6f7ff] z-[91]">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between gap-10">
          <div>
            <h3 className="text-lg font-semibold pb-4">Ta strona używa plików cookie</h3>
            <p className="text-sm text-[#202020]">
              Nasza strona internetowa korzysta z plików cookies w celu zapewnienia prawidłowego
              działania oraz analizy ruchu na stronie. Szczegółowe informacje na temat używania
              plików cookies znajdują się w naszej{' '}
              <a
                className="text-[#3547E3] font-bold"
                href={COOKIE_PDF}
                target="_blank"
                rel="noreferrer">
                [Polityce Cookies]
              </a>
              .
            </p>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
              Zaakceptuj
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieModal;
