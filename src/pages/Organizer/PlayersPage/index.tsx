import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import {
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled
} from '@mui/material';
import { toast } from 'react-toastify';

import ADD_IMAGE from '@/assets/add.png';
import AddPlayerModal from '@/components/players/AddPlayerModal';
import PlayerRow from '@/components/players/PlayerRow';
import { useAddAllPlayersMutation, useGetAllPlayersQuery } from '@/redux/api/playerApi';
import COLOR from '@/themes/colors';

//TODO: Loading

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const NoPlayers = () => {
  return (
    <Stack justifyContent="center" alignItems="center" m={3}>
      <img src={ADD_IMAGE} width="50px" />
      <Typography mt={2} textAlign="center">
        Nie posiadasz żadnych zawodników w turnieju.
        <br /> Dodaj ich ręcznie lub za pomocą pliku CSV!
      </Typography>
    </Stack>
  );
};

const PlayersPage = () => {
  const { data: players } = useGetAllPlayersQuery();
  const [addAllPlayers] = useAddAllPlayersMutation();

  const generatePlayers = () => {
    addAllPlayers().then(() => {
      toast.success('Dodano zadowników!');
    });
  };

  return (
    <Container>
      <Stack mt={5} mb={2} direction="row" justifyContent="space-between">
        <Typography variant="h6">Zawodnicy</Typography>
        <Stack flexDirection="row" gap={1}>
          <Button
            variant="contained"
            tabIndex={-1}
            role={undefined}
            component="label"
            startIcon={<FileUploadRoundedIcon />}>
            Dodaj Plik CSV <VisuallyHiddenInput type="file" onChange={generatePlayers} />
          </Button>
          <AddPlayerModal />
        </Stack>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ bgcolor: COLOR.LIGHT_GREY_BACKGROUND }}>
            <TableRow>
              <TableCell>Imię i nazwisko</TableCell>
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
        {players?.length === 0 && <NoPlayers />}
      </TableContainer>
    </Container>
  );
};

export default PlayersPage;
