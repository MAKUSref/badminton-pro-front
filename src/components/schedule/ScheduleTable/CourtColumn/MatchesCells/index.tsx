import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';

import MatchSingleItem from '../MatchSingleItem';
import { Id } from '@/redux/types/common';

export const SinglesMatchesCells = ({ singleMatchesId }: { singleMatchesId: Id[] }) => {
  return (
    <>
      {singleMatchesId.map((matchId, index) => {
        return (
          <Fragment key={index}>
            {matchId ? <MatchSingleItem matchId={matchId} /> : <Box height="62px" />}
            <Divider />
          </Fragment>
        );
      })}
    </>
  );
};
