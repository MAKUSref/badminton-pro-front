import Logo from '@/components/Logo';
import { Container, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack bgcolor="#4A5CF9">
      <Container>
        <Stack flexDirection="row" color={'white'} pb={10} pt={5} gap={30}>
          <Stack>
            <Logo mode="Dark" />
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
        </Stack>
      </Container>
      <Stack
        flexDirection="row"
        bgcolor="#3D4AB9"
        py={1.5}
        justifyContent="center"
        gap={7}
        color="#FFFFFF">
        <Typography fontSize="0.7rem">© 2024 BadmintonPro. Wszelkie prawa zastrzeżone.</Typography>
        <Typography fontSize="0.7rem">Polityka prawności</Typography>
        <Typography fontSize="0.7rem">Regulamin</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
