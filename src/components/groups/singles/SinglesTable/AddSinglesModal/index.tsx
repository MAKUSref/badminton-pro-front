import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { toast } from 'react-toastify';

import AvailablePlayersList from './AviablePlayersList';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { useAddManySinglesMutation } from '@/redux/api/singlesApi';
import { Gender, Id } from '@/redux/types/common';
import { SingleWithoutId } from '@/redux/types/Group';

export interface AddSinglesModalProps {
  gender: Gender;
  groupId: Id;
}

const AddSinglesModal = ({ groupId, gender }: AddSinglesModalProps) => {
  const [open, setOpen] = useState(false);
  const [playersIdList, setPlayersIdList] = useState<Id[]>([]);
  const [addManySingles, { isLoading }] = useAddManySinglesMutation();

  const handleCancel = () => {
    setOpen(false);
    setPlayersIdList([]);
  };

  const handleSave = () => {
    console.log(playersIdList.length);

    const singles: SingleWithoutId[] = playersIdList.map((playerId) => ({ playerId, groupId }));

    addManySingles({ singles })
      .unwrap()
      .then(() => {
        toast.success('Dodano zawodników do grupy!');
        setPlayersIdList([]);
        handleCancel();
      })
      .catch((e) => {
        toast.error(e.data);
        setPlayersIdList([]);
      });
  };
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <PersonAddAltRoundedIcon />
      </IconButton>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Dodaj zawodnika do singla</DialogTitle>
        <DialogContent>
          <AvailablePlayersList
            gender={gender}
            setPlayersIdList={setPlayersIdList}
            playersIdList={playersIdList}
          />
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: isLoading ? 'center' : 'flex-end' }}>
          {isLoading ? (
            <CircularProgress sx={{ justifySelf: 'center' }} size={20} />
          ) : (
            <>
              <Button onClick={handleCancel}>Anuluj</Button>
              <Button type="submit" variant="contained" onClick={handleSave}>
                Dodaj
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddSinglesModal;
