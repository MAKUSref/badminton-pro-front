import { Stack, Typography, Divider } from '@mui/material';
// import { useMemo } from 'react';

// import { MatchSingle } from '@/redux/types/Match';

// interface HoursColumnProps {
//   matches: MatchSingle[];
// }

const timeArray = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00'
];

const HoursColumn = () => {
  return (
    <Stack>
      <Stack p={1} style={{ marginBottom: '-7px' }}>
        <Typography color="#F9F9F9">Boisko</Typography>
      </Stack>
      <Stack>
        {timeArray.map((hour, index) => (
          <Divider key={index} sx={{ mb: '66.5px' }}>
            <Typography fontSize=".6rem">{hour}</Typography>
          </Divider>
        ))}
      </Stack>
    </Stack>
  );
};

export default HoursColumn;
