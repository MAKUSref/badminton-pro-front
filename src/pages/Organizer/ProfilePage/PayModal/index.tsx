import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField
} from '@mui/material';

interface PayModalProps {
  open: boolean;
  onSave: () => void;
  close: () => void;
}

const PayModal = ({ open, close, onSave }: PayModalProps) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Zaktualizuj kartę</DialogTitle>
      <DialogContent>
        <Stack gap={2} pt={3}>
          <TextField label="Numer karty" disabled value="**** **** **** 2321" />
          <div>
            <TextField label="Data ważności" sx={{ mr: 2 }} disabled value="04/28" />
            <TextField disabled value="CVV" />
          </div>

          <TextField label="Imię i nazwisko na karcie" disabled value="Jan Kowalski" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Anuluj</Button>
        <Button
          variant="contained"
          onClick={() => {
            onSave();
            close();
          }}>
          Zapisz
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayModal;
