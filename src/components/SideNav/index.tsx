import './style.scss';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NavMainButton from './NavMainButton';
import NavSecondaryButton from './NavSecondaryButton';

import Logo from '../Logo';
import { useGetMyTournamentQuery } from '@/redux/api/tournamentApi';
import { logout } from '@/redux/slices/currentSession';
import PATH from '@/routes/urls';
import PATH_CREATE_LEAGUE from '@/routes/urls';
import COLOR from '@/themes/colors';

const SideNav = () => {
  const { data: tournament } = useGetMyTournamentQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate(PATH_CREATE_LEAGUE.HOME);
  };

  return (
    <Stack
      className="side-nav-bar"
      bgcolor={COLOR.LIGHT_GREY_BACKGROUND}
      boxSizing="border-box"
      justifyContent="space-between">
      <Stack>
        <Box ml={3} mb={3}>
          <Logo />
        </Box>
        <Typography color={COLOR.LIGHT_GREY_TEXT} fontSize=".9rem" ml={3} mb={1}>
          {tournament?.name}
        </Typography>
        <Divider />
        <Stack paddingTop={3} mx={1}>
          <NavMainButton to={PATH.GAMES_SCHEDULE} label="Mecze" />
          <NavMainButton to={PATH.SINGLES} label="Single" />
          <NavMainButton to={PATH.PLAYERS} label="Zawodnicy" />
          <NavMainButton to={PATH.SETTINGS} label="Ustawienia" />
        </Stack>
      </Stack>
      <Stack>
        <Stack pt={1} mx={1} mb={3}>
          <NavSecondaryButton to={PATH.MY_ACCOUNT} label="Moje Konto" />
          <Typography
            sx={{ cursor: 'pointer' }}
            className="navLink"
            style={{
              color: COLOR.LIGHT_GREY_TEXT,
              padding: '10px 20px'
            }}
            onClick={handleLogout}>
            Wyloguj się
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SideNav;
