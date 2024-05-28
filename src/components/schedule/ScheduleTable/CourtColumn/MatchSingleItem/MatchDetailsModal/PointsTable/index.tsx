import { Match } from '@/redux/types/Match';
import { Box, Stack, Typography } from '@mui/material';

interface PointsTableProps {
  match: Match;
}

interface SetRowProps {
  set: number;
  p1: number | null;
  p2: number | null;
}

const SetRow = ({ set, p1, p2 }: SetRowProps) => (
  <Stack flexDirection="row" justifyContent="space-around" alignItems={'center'} py={1}>
    <Typography
      bgcolor={p1 === 21 ? '#CBD7FF' : 'transparent'}
      width={40}
      height={40}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={20}>
      {p1 ?? '-'}
    </Typography>
    <Typography fontSize={'0.6rem'}>Set {set}</Typography>
    <Typography
      bgcolor={p2 === 21 ? '#CBD7FF' : 'transparent'}
      width={40}
      height={40}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={20}>
      {p2 ?? '-'}
    </Typography>
  </Stack>
);

const PointsTable = ({ match: { participation1, participation2 } }: PointsTableProps) => {
  return (
    <Stack bgcolor={'#F0F5FF'} borderRadius={'7px'} width={'500px'}>
      <SetRow p1={participation1.set1} set={1} p2={participation2.set1} />
      <Box bgcolor={'white'}>
        <SetRow p1={participation1.set2} set={2} p2={participation2.set2} />
      </Box>
      <SetRow p1={participation1.set3} set={2} p2={participation2.set3} />
    </Stack>
  );
};

export default PointsTable;
