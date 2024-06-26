import { createBrowserRouter } from 'react-router-dom';

import PATH from './urls';

import Organizer from '@/pages/Organizer';
import GamesSchedulePage from '@/pages/Organizer/GamesSchedulePage';
import SinglesPage from '@/pages/Organizer/groups/SinglesPage';
import PlayersPage from '@/pages/Organizer/PlayersPage';
import ProfilePage from '@/pages/Organizer/ProfilePage';
import SettingsPage from '@/pages/Organizer/SettingsPage';
import HomePage from '@/pages/Public/HomePage';
import LoginPage from '@/pages/Public/LoginPage';
import RegisterPage from '@/pages/Public/RegisterPage';
import TournamentPage from '@/pages/Public/TournamentPage';

const router = createBrowserRouter([
  { path: PATH.HOME, element: <HomePage /> },
  { path: PATH.TOURNAMENT, element: <TournamentPage /> },
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.REGISTER, element: <RegisterPage /> },
  {
    path: PATH.ORGANIZER,
    element: <Organizer />,
    children: [
      {
        path: PATH.GAMES_SCHEDULE,
        element: <GamesSchedulePage />
      },
      {
        path: PATH.SINGLES,
        element: <SinglesPage />
      },
      {
        path: PATH.PLAYERS,
        element: <PlayersPage />
      },
      {
        path: PATH.MY_ACCOUNT,
        element: <ProfilePage />
      },
      {
        path: PATH.SETTINGS,
        element: <SettingsPage />
      }
    ]
  }
]);

export default router;
