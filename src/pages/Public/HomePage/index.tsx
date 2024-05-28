import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import INTRO_BG from '../../../assets/intro-bg.png';
import PATH_CREATE_LEAGUE from '@/routes/urls';
import COLOR from '@/themes/colors';

const HomePage = () => {
  return (
    <Stack height="100vh" position="relative" justifyContent="center">
      <img src={INTRO_BG} style={{ position: 'absolute', top: 0, right: 0 }} />
      <Container>
        <Typography maxWidth="1000px" lineHeight="5.5rem" variant="h1">
          Rozpocznij swój turniej badmintona
        </Typography>
        <Typography maxWidth="400px" color={COLOR.LIGHT_GREY_TEXT} mb={5} mt={3}>
          Stwórz swoją ligę badmintona i bądź na bieżąco z wynikami swoich zawodników. Niech emocje
          związane z grą nigdy nie opuszczają Cię!
        </Typography>
        <NavLink to={PATH_CREATE_LEAGUE.LOGIN}>
          <Button variant="contained" color="primary" size="large">
            Rozpocznij
          </Button>
        </NavLink>
        <Box mt={3}>
          <Button color="primary" size="large">
            Zarejestrój się
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default HomePage;
