import { Stack, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

import AddSinglesModal from './AddSinglesModal';

import PlayersTable from '@/components/groups/PlayersTable';
import PlayerRow from '@/components/groups/PlayersTable/PlayerRow';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import {
  useGetSinglesQuery,
  useLazyGetSingleScoreByIdQuery,
  useRemoveSingleByIdMutation
} from '@/redux/api/singlesApi';
import { useAppSelector } from '@/redux/store';
import { TournamentStatus } from '@/redux/types/common';
import { Group, Single } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';

interface PlayersTableProps {
  group: Group;
}

interface SingleScore {
  single: Single;
  allMatches: number;
  playedMatches: number;
  score: number;
}

const SinglesTable = ({ group }: PlayersTableProps) => {
  const { data: singles, isLoading } = useGetSinglesQuery({
    groupId: group._id
  });
  const [getSingleScore] = useLazyGetSingleScoreByIdQuery();
  const [remove] = useRemoveSingleByIdMutation();
  const isLogged = useAppSelector((state) => !!state.currentSession.sessionToken);
  const status = useAppSelector((state) => state.currentSession.tournamentStatus);

  const [scores, setScores] = useState<SingleScore[]>([]);

  const active = useMemo(() => status === TournamentStatus.REGISTER_PLAYERS, [status]);
  const sortedScores = useMemo(() => [...scores].sort((a, b) => b.score - a.score), [scores]);

  useEffect(() => {
    if (!singles) return;
    const arr: SingleScore[] = [];

    singles.map((single) => {
      getSingleScore(single._id)
        .unwrap()
        .then((score) => {
          setScores((prev) => [...prev, { ...score, single }]);
          arr.push({ ...score, single });
        })
        .then(() => {
          setScores([...arr]);
        });
    });
  }, [singles]);

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
          {!isLoading &&
            sortedScores?.map(({ single }, i) => (
              <PlayerRow
                key={i}
                single={single}
                index={i + 1}
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
