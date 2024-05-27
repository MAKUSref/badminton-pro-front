import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

import { SinglesMatchesCells } from './MatchesCells';

import { Match } from '@/redux/types/Match';
import COLOR from '@/themes/colors';
import { cmp, sortMatches } from '@/utility/scheduleUtility';

interface CourtColumnProps {
  singleMatches: Match[];
  court: number;
}

const CourtColumn = ({ singleMatches, court }: CourtColumnProps) => {
  // const singleFirstMatch = useMemo(() => singleMatches.at(0)?.startDataTime!, []);
  // const singleLastMatch = useMemo(() => singleMatches.at(-1)?.startDataTime!, []);
  const order = useMemo(() => sortMatches(singleMatches), []);

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
        {cmp(order, ['s, d', 'm']) && (
          <>
            <SinglesMatchesCells singleMatches={singleMatches} />
          </>
        )}
        {/* {cmp(order, ['s, m', 'd']) && (
          <>
            <SinglesMatchesCells singleMatches={singleMatches} />
            <MixesMatchesCells mixMatches={mixesMatches} />
            <DoublesMatchesCells doubleMatches={doubleMatches} />
          </>
        )}
        {cmp(order, ['d, s', 'm']) && (
          <>
            <DoublesMatchesCells doubleMatches={doubleMatches} />
            <SinglesMatchesCells singleMatches={singleMatches} />
            <MixesMatchesCells mixMatches={mixesMatches} />
          </>
        )}
        {cmp(order, ['d, m', 's']) && (
          <>
            <DoublesMatchesCells doubleMatches={doubleMatches} />
            <MixesMatchesCells mixMatches={mixesMatches} />
            <SinglesMatchesCells singleMatches={singleMatches} />
          </>
        )}
        {cmp(order, ['m, s', 'd']) && (
          <>
            <MixesMatchesCells mixMatches={mixesMatches} />
            <SinglesMatchesCells singleMatches={singleMatches} />
            <DoublesMatchesCells doubleMatches={doubleMatches} />
          </>
        )}
        {cmp(order, ['m, d', 's']) && (
          <>
            <MixesMatchesCells mixMatches={mixesMatches} />
            <DoublesMatchesCells doubleMatches={doubleMatches} />
            <SinglesMatchesCells singleMatches={singleMatches} />
          </>
        )} */}
      </Stack>
    </Stack>
  );
};

export default CourtColumn;
