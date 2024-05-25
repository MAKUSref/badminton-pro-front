import {
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

import AddPlayerModal from '@/components/users/AddUserModal';
import PlayerRow from '@/components/users/UserRow';
import { useGetAllPlayersQuery } from '@/redux/api/playerApi';
import COLOR from '@/themes/colors';

//TODO: Loading

const PlayersPage = () => {
  const { data: players } = useGetAllPlayersQuery();

  return (
    <Container>
      <Stack mt={5} mb={2} direction="row" justifyContent="space-between">
        <Typography variant="h6">Użytkownicy</Typography>
        <AddPlayerModal />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ bgcolor: COLOR.LIGHT_GREY_BACKGROUND }}>
            <TableRow>
              <TableCell>Imie i nazwisko</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Numer telefonu</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players?.map((player) => <PlayerRow key={player._id} user={player} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PlayersPage;
