import { Box, Divider } from '@mui/material';

import MatchSingleItem from '../MatchSingleItem';
import { Match } from '@/redux/types/Match';

export const SinglesMatchesCells = ({ singleMatches }: { singleMatches: Match[] }) => {
  return (
    <>
      {singleMatches.map((match, index) => {
        return (
          <>
            {match ? <MatchSingleItem key={index} {...match} /> : <Box height="62px" />}
            <Divider />
          </>
        );
      })}
    </>
  );
};
