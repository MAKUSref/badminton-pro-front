import { ButtonBase, Stack, Typography } from '@mui/material';

import { useGetGroupByIdQuery } from '@/redux/api/groupApi';
import { useGetSingleByIdQuery } from '@/redux/api/singlesApi';
import { useGetPlayerByIdQuery } from '@/redux/api/playerApi';
import { Match } from '@/redux/types/Match';
import { getGroupName } from '@/utility/getGroupName';

const MatchSingleItem = (match: Match) => {
  const { data: single1 } = useGetSingleByIdQuery(
    { id: match?.participation1?.singleId },
    { skip: !match }
  );

  const { data: player1 } = useGetPlayerByIdQuery(single1?.playerId ?? '', {
    skip: !single1
  });
  const { data: single2 } = useGetSingleByIdQuery(
    { id: match?.participation2?.singleId },
    { skip: !match }
  );
  const { data: player2 } = useGetPlayerByIdQuery(single2?.playerId ?? '', { skip: !single2 });
  const { data: group } = useGetGroupByIdQuery(single1?.groupId ?? '', {
    skip: !single1
  });

  return (
    <ButtonBase
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
          </Stack>
          <Stack alignItems="center">
            <Typography fontSize="0.7rem">{player2?.firstName}</Typography>
            <Typography fontSize="0.7rem">{player2?.lastName}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </ButtonBase>
  );
};

export default MatchSingleItem;
