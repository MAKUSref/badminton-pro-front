import { createBrowserRouter } from 'react-router-dom';

import PATH from './urls';

import Organizer from '@/pages/Organizer';
import GamesSchedulePage from '@/pages/Organizer/GamesSchedulePage';
import SinglesPage from '@/pages/Organizer/groups/SinglesPage';
import PlayersPage from '@/pages/Organizer/PlayersPage';
import SettingsPage from '@/pages/Organizer/SettingsPage';
import HomePage from '@/pages/Public/HomePage';
import LoginPage from '@/pages/Public/LoginPage';
import TournamentPage from '@/pages/Public/TournamentPage';

const router = createBrowserRouter([
  { path: PATH.HOME, element: <HomePage /> },
  { path: PATH.TOURNAMENT, element: <TournamentPage /> },
  { path: PATH.LOGIN, element: <LoginPage /> },
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
        path: PATH.SETTINGS,
        element: <SettingsPage />
      }
    ]
  }
]);

export default router;
