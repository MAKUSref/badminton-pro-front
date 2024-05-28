import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useUpdateMatchMutation } from '@/redux/api/matchApi';
import { Match, MatchWithoutId } from '@/redux/types/Match';

interface PointsTableProps {
  match: Match;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface SetRowProps {
  set: '1' | '2' | '3';
}

const SetRow = ({ set }: SetRowProps) => {
  const { register } = useFormContext<MatchWithoutId>();
  return (
    <Stack flexDirection="row" justifyContent="space-around" alignItems={'center'} py={1}>
      <TextField
        sx={{ width: 70 }}
        size="small"
        type="number"
        {...register(`participation1.set${set}`)}
      />
      <Typography fontSize={'0.6rem'}>Set {set}</Typography>
      <TextField
        sx={{ width: 70 }}
        size="small"
        type="number"
        {...register(`participation2.set${set}`)}
      />
    </Stack>
  );
};

const EditPointsTable = ({ match, setVisible }: PointsTableProps) => {
  const methods = useForm<MatchWithoutId>({ defaultValues: { ...match } });
  const [updateMatch] = useUpdateMatchMutation();

  const savePoints = (newMatch: MatchWithoutId) => {
    updateMatch({ id: match._id, match: newMatch })
      .then(() => {
        toast.success('Zmieniono punkty!');
        setVisible(false);
      })
      .catch(() => {
        toast.error('Błąd przy edycji punktacji');
      });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(savePoints)}>
        <Stack gap={2} flexDirection="row" justifyContent="flex-end" mb={1}>
          <Button onClick={() => setVisible(false)}>Anuluj</Button>
          <Button variant="contained" type="submit">
            Zapisz
          </Button>
        </Stack>
        <Stack bgcolor={'#F0F5FF'} borderRadius={'7px'} width={'500px'}>
          <SetRow set="1" />
          <Box bgcolor={'white'}>
            <SetRow set="2" />
          </Box>
          <SetRow set="3" />
        </Stack>
      </form>
    </FormProvider>
  );
};

export default EditPointsTable;
