import { Stack, Typography } from '@mui/material';

import PlayersTable from '@/components/groups/common/PlayersTable';
import PlayerRow from '@/components/groups/common/PlayersTable/PlayerRow';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import { useGetSinglesQuery, useRemoveSingleByIdMutation } from '@/redux/api/singlesApi';
import { Group } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';
import AddSinglesModal from './AddSinglesModal';

interface PlayersTableProps {
  group: Group;
}

const SinglesTable = ({ group }: PlayersTableProps) => {
  const { data: singles, isLoading } = useGetSinglesQuery({
    groupId: group._id
  });
  const [remove] = useRemoveSingleByIdMutation();

  return (
    <Stack maxWidth="400px" px={2}>
      <Stack mt={5} mb={2} flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">
          {getGroupName(group?.type, group?.gender, group?.category)}
        </Typography>
        <AddSinglesModal gender={group.gender!} groupId={group._id} />
      </Stack>
      <PlayersTable isEmpty={singles?.length === 0}>
        <>
          {isLoading && <TableSkeleton colsNum={2} />}
          {singles?.map((single, index) => (
            <PlayerRow
              key={single._id}
              playerId={single.playerId}
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
