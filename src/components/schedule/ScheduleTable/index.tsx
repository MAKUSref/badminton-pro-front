import './style.scss';
import { Stack } from '@mui/material';
import { useMemo, useState } from 'react';

import CourtColumn from './CourtColumn';
import HoursColumn from './HoursColumn';
import SelectRound from './SelectRound';

import { useGetMatchByIdQuery } from '@/redux/api/matchApi';
import { ScheduleDetails } from '@/redux/types/Match';

interface ScheduleTableProps {
  scheduleDetails: ScheduleDetails;
}

const ScheduleTable = ({ scheduleDetails }: ScheduleTableProps) => {
  const [round, setRound] = useState(0);

  const courts = useMemo(
    () => [...Array(parseInt(scheduleDetails.courtCount.toString())).keys()],
    [scheduleDetails]
  );
  const { data: firstMatchOfRound } = useGetMatchByIdQuery(scheduleDetails.schedule[round][0][0]);
  const date = useMemo(
    () => firstMatchOfRound?.startDataTime.split(' ')[0],
    [scheduleDetails, round]
  );

  return (
    <Stack>
      {scheduleDetails.rounds > 1 && (
        <SelectRound
          setRound={setRound}
          roundsCount={scheduleDetails.rounds}
          date={date ?? ''}
          round={round}
        />
      )}

      <Stack direction="row" gap={1} bgcolor={'#F9F9F9'} p={1} style={{ borderRadius: '10px' }}>
        <HoursColumn />
        {courts.map((court) => (
          <CourtColumn
            key={court}
            court={court + 1}
            singleMatchesId={scheduleDetails.schedule[round][court]}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ScheduleTable;
