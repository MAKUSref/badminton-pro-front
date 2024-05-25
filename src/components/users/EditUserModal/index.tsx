import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tooltip
} from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import PersonalDataInputs from '../AddUserModal/PersonalDataInputs';
import { useUpdatePlayerMutation } from '@/redux/api/playerApi';
import { Player, PlayerWithoutId } from '@/redux/types/Player';

const EditUserModal = ({ savedUser }: { savedUser: Player }) => {
  const [open, setOpen] = useState(false);
  const methods = useForm<PlayerWithoutId>({
    defaultValues: savedUser
  });
  const [updateUser] = useUpdatePlayerMutation();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = (user: PlayerWithoutId) => {
    updateUser({ id: savedUser._id, player: user }).then(() => {
      handleCancel();
    });
  };

  return (
    <>
      <Tooltip title="Edytuj" placement="top">
        <IconButton sx={{ mr: 1 }} onClick={() => setOpen(true)}>
          <EditRoundedIcon />
        </IconButton>
      </Tooltip>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSave)}>
            <DialogTitle>Dodaj zawodnika</DialogTitle>
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

export default EditUserModal;
