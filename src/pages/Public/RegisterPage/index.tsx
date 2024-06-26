import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import INTRO_BG from '@/assets/intro-bg.svg';
import POLICY_PDF from '@/bin/policy.pdf';
import Logo from '@/components/Logo';
import { registerAccount } from '@/redux/slices/currentSession';
import { useAppDispatch } from '@/redux/store';
import PATH_CREATE_LEAGUE from '@/routes/urls';
import COLOR from '@/themes/colors';

interface RegisterSchema {
  organizatorName: string;
  email: string;
  password: string;
  repeatPassword: string;
  policy: boolean;
}

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<RegisterSchema>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = ({
    email,
    organizatorName,
    password,
    repeatPassword,
    policy
  }: RegisterSchema) => {
    if (email && organizatorName && password && repeatPassword && policy) {
      if (password === repeatPassword) {
        dispatch(registerAccount({ email, password, organizatorName }));
        toast.success('Zarejestrowano pomyślnie!');
        navigate(PATH_CREATE_LEAGUE.LOGIN);
        return;
      }
      toast.error('Hasła nie są takie same!');
      return;
    }
    toast.error('Wypełnij wszystkie pola!');
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
              <TextField
                {...register('organizatorName')}
                label="Nazwa organizatora"
                size="small"
                fullWidth
              />
            </Box>
            <Box mb={3}>
              <TextField {...register('email')} label="E-mail" size="small" fullWidth />
            </Box>
            <Box mb={3}>
              <TextField
                {...register('password')}
                label="Hasło"
                size="small"
                type="password"
                fullWidth
              />
            </Box>
            <Box mb={1}>
              <TextField
                {...register('repeatPassword')}
                label="Powtórz hasło"
                size="small"
                type="password"
                fullWidth
              />
            </Box>
            <FormControlLabel
              control={<Checkbox {...register('policy')} />}
              className="mb-4"
              label={
                <Typography>
                  Zapoznałem się z{' '}
                  <a
                    className="text-[#4A5CF9] underline font-semibold"
                    href={POLICY_PDF}
                    target="_blank"
                    rel="noreferrer">
                    regulaminem
                  </a>{' '}
                  i akceptuje jego treść.
                </Typography>
              }
            />
            <Box>
              <Button sx={{ mx: 'auto', display: 'block' }} variant="contained" type="submit">
                Zarejestruj się
              </Button>
            </Box>
            <Typography variant="body1" className="text-center pt-3">
              Masz już konto?{' '}
              <NavLink
                to={PATH_CREATE_LEAGUE.LOGIN}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="caption" fontSize="inherit" color="primary" fontWeight="700">
                  Zaloguj się!
                </Typography>
              </NavLink>
            </Typography>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default RegisterPage;
