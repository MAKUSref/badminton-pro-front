import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
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

const GenerateScheduleModal = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<ScheduleForm>();
  const [schedule, setSchedule] = useState<null | ScheduleResponse>(null);

  const [generateSchedule] = useGenerateScheduleMutation();
  const [saveSchedule] = useSaveScheduleMutation();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleGenerate = (scheduleForm: ScheduleForm) => {
    generateSchedule(scheduleForm)
      .unwrap()
      .then((sch) => {
        setSchedule(sch);
      });
  };

  const handleSave = () => {
    saveSchedule(schedule!)
      .unwrap()
      .then(() => {
        handleCancel();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        Stwórz terminarz
      </Button>
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
              <Button onClick={handleCancel}>Anuluj</Button>
              <Button variant="contained" type="submit">
                Zatwierdź
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
      {schedule && (
        <Dialog onClose={handleCancel} open={open} fullScreen>
          <DialogTitle fontSize="1.3rem" fontWeight="bold">
            Stwórz terminarz
          </DialogTitle>
          <DialogContent>
            <GeneratedScheduleTable schedule={schedule} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Anuluj</Button>
            <Button variant="contained" onClick={handleSave}>
              Zatwierdź
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default GenerateScheduleModal;
