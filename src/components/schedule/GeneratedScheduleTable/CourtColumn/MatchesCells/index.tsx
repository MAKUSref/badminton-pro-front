import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';

import MatchSingleItem from '../MatchSingleItem';
import { Match } from '@/redux/types/Match';

export const SinglesMatchesCells = ({ singleMatches }: { singleMatches: Match[] }) => {
  return (
    <>
      {singleMatches.map((match, index) => {
        return (
          <Fragment key={index}>
            {match ? <MatchSingleItem {...match} /> : <Box height="62px" />}
            <Divider />
          </Fragment>
        );
      })}
    </>
  );
};
