import './style.scss';
import { Box, Divider, Stack, Typography } from '@mui/material';

import NavExpandButton from './NavExpandButton';
import NavMainButton from './NavMainButton';
import NavSecondaryButton from './NavSecondaryButton';

import Logo from '../Logo';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import { useGetMyTournamentQuery } from '@/redux/api/tournamentApi';
import PATH from '@/routes/urls';
import COLOR from '@/themes/colors';

const SideNav = () => {
  const { data: groups } = useGetAllGroupsQuery({});
  const { data: tournament } = useGetMyTournamentQuery();

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
        <Typography color={COLOR.LIGHT_GREY_TEXT} fontSize=".7rem" ml={3} mb={1}>
          {tournament?.name}
        </Typography>
        <Divider />
        <Stack paddingTop={3} mx={1}>
          <NavMainButton to={PATH.GAMES_SCHEDULE} label="Mecze" />
          <NavExpandButton label="Grupy">
            {groups && groups.length > 0 && (
              <>
                <NavMainButton to={PATH.SINGLES} label="Single" />
              </>
            )}
            <NavMainButton to={PATH.MENAGE_REGISTRATION} label="Menager Zapisów" />
          </NavExpandButton>
          <NavMainButton to={PATH.USERS} label="Zawodnicy" />
          <NavMainButton to={PATH.GAMES_SCHEDULE} label="O turnieju" />
          <NavMainButton to={PATH.GAMES_SCHEDULE} label="Ustawienia" />
        </Stack>
      </Stack>
      <Stack>
        <Stack pt={1} mx={1} mb={3}>
          <NavSecondaryButton to={PATH.MY_ACCOUNT} label="Moje Konto" />
          <Typography
            className="navLink"
            style={{
              color: COLOR.LIGHT_GREY_TEXT,
              padding: '10px 20px'
            }}>
            Wyloguj się
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SideNav;
