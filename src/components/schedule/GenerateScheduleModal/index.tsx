import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import CourtCountInput from './CourtCountInput';
import RangeTimeInput from './RangeTimeInput';
import StartDateInput from './StartDateInput';

import GeneratedScheduleTable from '../GeneratedScheduleTable';
import {
  ScheduleForm,
  useGenerateScheduleMutation,
  useSaveScheduleMutation
} from '@/redux/api/scheduleApi';
import { ScheduleResponse } from '@/redux/types/Match';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { TournamentStatus } from '@/redux/types/common';
import { setTournamentStatus } from '@/redux/slices/currentSession';

const GenerateScheduleModal = () => {
  const [open, setOpen] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);
  const methods = useForm<ScheduleForm>();
  const [schedule, setSchedule] = useState<null | ScheduleResponse>(null);
  const status = useAppSelector((state) => state.currentSession.tournamentStatus);

  const [generateSchedule, { isLoading: isGenerateLoading }] = useGenerateScheduleMutation();
  const [saveSchedule, { isLoading: isSaveLoading }] = useSaveScheduleMutation();
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    methods.reset();
    closeDialog();
  };

  const handleCancelSave = () => {
    methods.reset();
    setOpenSchedule(false);
    setOpen(false);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleGenerate = (scheduleForm: ScheduleForm) => {
    generateSchedule(scheduleForm)
      .unwrap()
      .then((sch) => {
        setSchedule(sch);
        setOpenSchedule(true);
      });
  };

  const handleSave = () => {
    saveSchedule(schedule!)
      .unwrap()
      .then(() => {
        setOpenSchedule(false);
        setOpen(false);
        dispatch(setTournamentStatus(TournamentStatus.CLOSED));
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        disabled={status !== TournamentStatus.REGISTER_PLAYERS}>
        Stwórz terminarz
      </Button>
      {status !== TournamentStatus.REGISTER_PLAYERS && (
        <Typography mt={1} color={'red'} fontSize={'.6rem'}>
          Musisz najpierw zatwierdzić zawodników oraz grupy
        </Typography>
      )}
      <Dialog onClose={handleCancel} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleGenerate)}>
            <DialogTitle fontSize="1.3rem" fontWeight="bold">
              Stwórz terminarz
            </DialogTitle>
            <DialogContent>
              <Stack gap={5} mt={2}>
                <StartDateInput />
                <CourtCountInput />
                <RangeTimeInput />
              </Stack>
            </DialogContent>
            <DialogActions>
              {isGenerateLoading ? (
                <CircularProgress sx={{ justifySelf: 'center' }} size={20} />
              ) : (
                <>
                  <Button onClick={handleCancel}>Anuluj</Button>
                  <Button variant="contained" type="submit">
                    Wygeneruj
                  </Button>
                </>
              )}
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
      {schedule && (
        <Dialog onClose={handleCancelSave} open={openSchedule} fullScreen>
          <DialogTitle fontSize="1.3rem" fontWeight="bold">
            Stwórz terminarz
          </DialogTitle>
          <DialogContent>
            <GeneratedScheduleTable schedule={schedule} />
          </DialogContent>
          <DialogActions>
            {isSaveLoading ? (
              <CircularProgress sx={{ justifySelf: 'center' }} size={20} />
            ) : (
              <>
                <Button onClick={handleCancelSave}>Anuluj</Button>
                <Button variant="contained" onClick={handleSave}>
                  Zatwierdź
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default GenerateScheduleModal;
