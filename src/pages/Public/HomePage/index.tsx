import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import Footer from './Footer';
import HowToSection from './HowToSection';
import Navbar from './Navbar';
import PlansSection from './PlansSection';

import INTRO_BG from '@/assets/intro-bg.svg';
import PATH_CREATE_LEAGUE from '@/routes/urls';
import COLOR from '@/themes/colors';

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="container">
        <div className="flex flex-col justify-center h-dvh pt-[50px]">
          <img src={INTRO_BG} className="absolute top-0 right-0 -z-10 hidden md:block w-[600px]" />
          <div className="pb-24">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-[700px]">
              Koordynuj swój własny turniej z nami
            </h1>

            <Typography maxWidth="400px" color={COLOR.LIGHT_GREY_TEXT} mb={5} mt={3}>
              Stwórz swój własny turniej badmintona i bądź na bieżąco z wynikami swoich zawodników.
              Niech emocje związane z grą nigdy nie opuszczają Cię!
            </Typography>
            <div className="flex items-center w-fit gap-1 flex-col">
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
            </div>
          </div>
        </div>
      </div>
      <HowToSection />
      <PlansSection />
      <Footer />
    </div>
  );
};

export default HomePage;
