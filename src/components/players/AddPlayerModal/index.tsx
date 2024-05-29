import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import PersonalDataInputs from './PersonalDataInputs';

import { useAddPlayerMutation } from '@/redux/api/playerApi';
import { useAppSelector } from '@/redux/store';
import { TournamentStatus } from '@/redux/types/common';
import { PlayerWithoutId } from '@/redux/types/Player';

const AddPlayerModal = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<PlayerWithoutId>();
  const [addPlayer] = useAddPlayerMutation();
  const status = useAppSelector((state) => state.currentSession.tournamentStatus);
  const disabled = useMemo(() => status !== TournamentStatus.ADDING_PLAYERS_GROUPS, [status]);

  const handleCancel = () => {
    setOpen(false);
    methods.reset();
  };

  const handleSave = (player: PlayerWithoutId) => {
    addPlayer(player).then(() => {
      handleCancel();
    });
  };

  return (
    <>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={() => setOpen(true)}
        startIcon={<PersonAddAltRoundedIcon />}>
        Dodaj użytkownika
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSave)}>
            <DialogTitle>Dodaj użytkownika</DialogTitle>
            <DialogContent>
              <Stack>
                <PersonalDataInputs />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancel}>Anuluj</Button>
              <Button variant="contained" type="submit">
                Zatwierdź
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default AddPlayerModal;
