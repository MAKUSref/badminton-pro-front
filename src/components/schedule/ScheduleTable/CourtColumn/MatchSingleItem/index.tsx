import { ButtonBase, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import MatchDetailsModal from './MatchDetailsModal';

import { useGetGroupByIdQuery } from '@/redux/api/groupApi';
import { useGetMatchByIdQuery } from '@/redux/api/matchApi';
import { useGetPlayerByIdQuery } from '@/redux/api/playerApi';
import { useGetSingleByIdQuery } from '@/redux/api/singlesApi';
import { Id } from '@/redux/types/common';
import { getGroupName } from '@/utility/getGroupName';
import { getScore } from '@/utility/getScore';

interface MatchSingleItemProps {
  matchId: Id;
  isPublic?: boolean;
}

const MatchSingleItem = ({ matchId, isPublic }: MatchSingleItemProps) => {
  const [openDetails, setOpenDetails] = useState(false);

  const { data: match } = useGetMatchByIdQuery(matchId);

  const { data: single1 } = useGetSingleByIdQuery(
    { id: match?.participation1?.singleId! },
    { skip: !match }
  );

  const { data: player1 } = useGetPlayerByIdQuery(single1?.playerId ?? '', {
    skip: !single1
  });
  const { data: single2 } = useGetSingleByIdQuery(
    { id: match?.participation2?.singleId! },
    { skip: !match }
  );
  const { data: player2 } = useGetPlayerByIdQuery(single2?.playerId ?? '', { skip: !single2 });
  const { data: group } = useGetGroupByIdQuery(single1?.groupId ?? '', {
    skip: !single1
  });

  return (
    <>
      <ButtonBase
        onClick={() => setOpenDetails(true)}
        sx={{
          '&:hover': {
            backgroundColor: '#f1f1f1'
          }
        }}>
        <Stack width="200px" p={1}>
          {group && (
            <Typography sx={{ width: 'fit-content', alignSelf: 'center', fontSize: '0.5rem' }}>
              {getGroupName(group.type, group.gender, group.category)}
            </Typography>
          )}
          <Stack direction={'row'} justifyContent="space-between">
            <Stack alignItems="center">
              <Typography fontSize="0.7rem">{player1?.firstName}</Typography>
              <Typography fontSize="0.7rem">{player1?.lastName}</Typography>
              {match?.participation1 && (
                <Typography>{getScore({ participation: match?.participation1 })}</Typography>
              )}
            </Stack>
            <Stack alignItems="center">
              <Typography fontSize="0.7rem">{player2?.firstName}</Typography>
              <Typography fontSize="0.7rem">{player2?.lastName}</Typography>
              {match?.participation1 && (
                <Typography>{getScore({ participation: match?.participation2 })}</Typography>
              )}
            </Stack>
          </Stack>
        </Stack>
      </ButtonBase>
      {match && group && player1 && player2 && (
        <MatchDetailsModal
          isPublic={isPublic}
          match={match!}
          group={group!}
          open={openDetails}
          setOpen={setOpenDetails}
          player1={player1!}
          player2={player2!}
        />
      )}
    </>
  );
};

export default MatchSingleItem;
