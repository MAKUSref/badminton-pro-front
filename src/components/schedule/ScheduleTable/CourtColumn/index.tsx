import { Stack, Typography } from '@mui/material';

import { SinglesMatchesCells } from './MatchesCells';

import { Id } from '@/redux/types/common';
import COLOR from '@/themes/colors';

interface CourtColumnProps {
  singleMatchesId: Id[];
  court: number;
}

const CourtColumn = ({ singleMatchesId, court }: CourtColumnProps) => {
  return (
    <Stack bgcolor={'white'} style={{ borderRadius: '10px' }}>
      <Stack
        bgcolor={COLOR.PRIMARY}
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        p={1}
        alignItems="center">
        <Typography color="white" fontWeight={600}>
          Boisko {court}
        </Typography>
      </Stack>
      <Stack>
        <SinglesMatchesCells singleMatchesId={singleMatchesId} />
      </Stack>
    </Stack>
  );
};

export default CourtColumn;
