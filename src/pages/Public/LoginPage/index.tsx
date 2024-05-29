import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import INTRO_BG from '@/assets/intro-bg.svg';
import Logo from '@/components/Logo';
import { setToken } from '@/redux/slices/currentSession';
import PATH_CREATE_LEAGUE from '@/routes/urls';
import COLOR from '@/themes/colors';

const LOGIN = 'admin';
const PASSWORD = 'admin';

interface LoginSchema {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginSchema>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }: LoginSchema) => {
    if (email === LOGIN && password === PASSWORD) {
      dispatch(setToken('token'));
      navigate(PATH_CREATE_LEAGUE.PLAYERS);
    }
  };

  return (
    <>
      <img src={INTRO_BG} style={{ position: 'absolute', top: 0, right: 0, width: 600 }} />
      <Box position="absolute" zIndex={11} px={4} py={1}>
        <NavLink to={PATH_CREATE_LEAGUE.HOME} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo />
        </NavLink>
      </Box>
      <Stack
        height="100vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignItems="center">
        <Stack
          maxWidth="600px"
          bgcolor="white"
          px={7}
          py={7}
          borderRadius={2}
          border={1}
          borderColor={COLOR.GREY_BORDER}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack alignItems="center" mb={3}>
              <NavLink
                to={PATH_CREATE_LEAGUE.HOME}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <Logo />
              </NavLink>
            </Stack>
            <Box mb={3}>
              <TextField {...register('email')} label="E-mail" size="small" fullWidth />
            </Box>
            <Box mb={3}>
              <TextField
                {...register('password')}
                label="Password"
                size="small"
                type="password"
                fullWidth
              />
            </Box>
            <Typography variant="body1">
              Nie masz jeszcze konta?{' '}
              <Typography variant="caption" fontSize="inherit" color="primary" fontWeight="700">
                Zarejestruj się!
              </Typography>
            </Typography>
            <Box mt={3}>
              <Button sx={{ mx: 'auto', display: 'block' }} variant="contained" type="submit">
                Zaloguj się
              </Button>
            </Box>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default LoginPage;
