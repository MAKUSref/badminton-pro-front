import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import FieldWrapper from '../FieldWrapper';
import { ScheduleForm } from '@/redux/api/scheduleApi';
import { DATE_FORMAT } from '@/redux/types/common';

const StartDateInput = () => {
  const { setValue, watch } = useFormContext<ScheduleForm>();
  const startDate = watch('startDate');
  const datePickerValue = useMemo(
    () => (startDate ? dayjs(startDate, DATE_FORMAT) : dayjs()),
    [startDate]
  );

  useEffect(() => {
    setValue('startDate', dayjs().format(DATE_FORMAT));
  }, []);

  return (
    <FieldWrapper
      label={`Data rozpoczęcia`}
      description={`Wybrana przez ciebie data będzie równoznaczna z rozpoczęciem pierwszej kolejki`}>
      <DatePicker
        views={['month', 'day', 'year']}
        disablePast
        format={DATE_FORMAT}
        value={datePickerValue}
        onChange={(value) => {
          setValue('startDate', value?.format(DATE_FORMAT) ?? dayjs().format(DATE_FORMAT));
        }}
      />
    </FieldWrapper>
  );
};

export default StartDateInput;
