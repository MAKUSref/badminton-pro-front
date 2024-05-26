import './style.scss';
import { Stack } from '@mui/material';
import { useMemo, useState } from 'react';

import CourtColumn from './CourtColumn';
import HoursColumn from './HoursColumn';
import SelectRound from './SelectRound';

import { ScheduleResponse } from '@/redux/types/Match';

interface ScheduleTableProps {
  schedule: ScheduleResponse;
}

const ScheduleTable = ({ schedule }: ScheduleTableProps) => {
  // const turn = schedule[0];
  const [round, setRound] = useState(0);

  console.log({ data: schedule.schedule.length });
  const courts = useMemo(() => [...Array(parseInt(schedule.courts)).keys()], [schedule]);
  const date = useMemo(
    () => schedule.schedule[round][0][0].startDataTime.split(' ')[0],
    [schedule, round]
  );

  return (
    <Stack>
      <SelectRound setRound={setRound} roundsCount={schedule.rounds} date={date} round={round} />
      <Stack direction="row" gap={1} bgcolor={'#F9F9F9'} p={1} style={{ borderRadius: '10px' }}>
        <HoursColumn />
        {courts.map((court) => (
          <CourtColumn
            key={court}
            court={court + 1}
            singleMatches={schedule.schedule[round][court]}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ScheduleTable;
