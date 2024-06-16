import Logo from '@/components/Logo';
import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className="bg-[#4A5CF9]">
      <div className="container">
        <div className="flex text-white pb-10 pt-5 gap-10 sm:gap-32">
          <Stack>
            <div className="hidden sm:block">
              <Logo mode="dark" size="large" />
            </div>
            <div className="sm:hidden">
              <Logo mode="dark" size="small" />
            </div>
            <Typography>Internetowy system do koordynowania turnieji badmintona.</Typography>
          </Stack>
          <Stack gap={1} mt={3}>
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
        <div className="container flex justify-center py-1 gap-7 text-white ">
          <Typography fontSize="0.7rem" textAlign="center">
            © 2024 BadmintonPro. Wszelkie prawa zastrzeżone.
          </Typography>
          <Typography fontSize="0.7rem" textAlign="center">
            Polityka prawności
          </Typography>
          <Typography fontSize="0.7rem" textAlign="center">
            Regulamin
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
