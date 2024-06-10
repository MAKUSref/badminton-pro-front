import { Button, Container, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import INTRO_BG from '@/assets/intro-bg.svg';
import PATH_CREATE_LEAGUE from '@/routes/urls';
import COLOR from '@/themes/colors';

const HomePage = () => {
  return (
    <Stack height="100vh" position="relative" justifyContent="center">
      <img
        src={INTRO_BG}
        style={{ position: 'absolute', top: 0, right: 0, zIndex: -10, width: 600 }}
      />
      <Container>
        <Typography maxWidth="1000px" lineHeight="5.5rem" variant="h1">
          Rozpocznij swój turniej badmintona
        </Typography>
        <Typography maxWidth="400px" color={COLOR.LIGHT_GREY_TEXT} mb={5} mt={3}>
          Stwórz swoją ligę badmintona i bądź na bieżąco z wynikami swoich zawodników. Niech emocje
          związane z grą nigdy nie opuszczają Cię!
        </Typography>

        <Stack gap={1} alignItems="center" width="fit-content">
          <NavLink to={PATH_CREATE_LEAGUE.REGISTER}>
            <Button variant="contained" color="primary" size="large">
              Zarejestruj się
            </Button>
          </NavLink>
          <NavLink to={PATH_CREATE_LEAGUE.LOGIN}>
            <Button color="primary" size="large">
              Zaloguj się
            </Button>
          </NavLink>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomePage;
