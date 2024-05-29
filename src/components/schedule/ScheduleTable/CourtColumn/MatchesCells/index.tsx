import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';

import MatchSingleItem from '../MatchSingleItem';
import { Id } from '@/redux/types/common';

interface SinglesMatchesCellsProps {
  singleMatchesId: Id[];
  isPublic?: boolean;
}

export const SinglesMatchesCells = ({ singleMatchesId, isPublic }: SinglesMatchesCellsProps) => {
  return (
    <>
      {singleMatchesId.map((matchId, index) => {
        return (
          <Fragment key={index}>
            {matchId ? (
              <MatchSingleItem matchId={matchId} isPublic={isPublic} />
            ) : (
              <Box height="62px" />
            )}
            <Divider />
          </Fragment>
        );
      })}
    </>
  );
};
