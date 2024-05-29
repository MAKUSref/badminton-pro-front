import { Stack, Typography } from '@mui/material';

import AddSinglesModal from './AddSinglesModal';

import PlayersTable from '@/components/groups/PlayersTable';
import PlayerRow from '@/components/groups/PlayersTable/PlayerRow';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import { useGetSinglesQuery, useRemoveSingleByIdMutation } from '@/redux/api/singlesApi';
import { useAppSelector } from '@/redux/store';
import { Group } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';
import { TournamentStatus } from '@/redux/types/common';
import { useMemo } from 'react';

interface PlayersTableProps {
  group: Group;
}

const SinglesTable = ({ group }: PlayersTableProps) => {
  const { data: singles, isLoading } = useGetSinglesQuery({
    groupId: group._id
  });
  const [remove] = useRemoveSingleByIdMutation();
  const isLogged = useAppSelector((state) => !!state.currentSession.sessionToken);
  const status = useAppSelector((state) => state.currentSession.tournamentStatus);
  const active = useMemo(() => status === TournamentStatus.REGISTER_PLAYERS, [status]);

  console.log(isLogged);

  return (
    <Stack maxWidth="400px" px={2}>
      <Stack mt={5} mb={2} flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">
          {getGroupName(group?.type, group?.gender, group?.category)}
        </Typography>
        {isLogged && active && <AddSinglesModal gender={group.gender!} groupId={group._id} />}
      </Stack>
      <PlayersTable isEmpty={singles?.length === 0}>
        <>
          {isLoading && <TableSkeleton colsNum={2} />}
          {singles?.map((single, index) => (
            <PlayerRow
              key={single._id}
              single={single}
              index={index + 1}
              onRemoveClick={() => {
                remove({ id: single._id });
              }}
            />
          ))}
        </>
      </PlayersTable>
    </Stack>
  );
};

export default SinglesTable;
