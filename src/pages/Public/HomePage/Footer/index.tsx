import { Stack, Typography } from '@mui/material';

import POLICY_PDF from '@/bin/policy.pdf';
import LICENSE_PDF from '@/bin/policy.pdf';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <div className="bg-[#4A5CF9]">
      <div className="container">
        <div className="flex flex-col sm:flex-row text-white pb-10 pt-24 gap-10 sm:gap-32">
          <Stack className="text-center sm:text-left items-center sm:items-start">
            <div className="hidden sm:block">
              <Logo mode="dark" size="large" />
            </div>
            <div className="sm:hidden">
              <Logo mode="dark" size="small" />
            </div>
            <Typography>Internetowy system do koordynowania turnieji badmintona.</Typography>
          </Stack>
          <Stack className="text-center sm:text-left" gap={1} mt={3}>
            <Typography variant="h5" fontWeight="bold">
              Kontakt
            </Typography>
            <Typography>Adres: ul. Sportowa 10, 00-000 Łódź</Typography>
            <Typography>Adres: kontakt@badpro.pl</Typography>
            <Typography>Telefon: 729 323 123</Typography>
          </Stack>
        </div>
      </div>
      <div className="bg-[#3D4AB9]">
        <div className="container py-3 flex justify-center gap-7 text-white">
          <Typography fontSize="0.7rem" textAlign="center">
            © 2024 BadmintonPro. Wszelkie prawa zastrzeżone.
          </Typography>
          <Typography fontSize="0.7rem" textAlign="center">
            <a href={POLICY_PDF} target="_blank" rel="noreferrer">
              Polityka prawności
            </a>
          </Typography>
          <Typography fontSize="0.7rem" textAlign="center">
            <a href={LICENSE_PDF} target="_blank" rel="noreferrer">
              Regulamin
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
