import { Dialog, DialogTitle, DialogContent, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import PointsTable from './PointsTable';

import { Group } from '@/redux/types/Group';
import { Match, Participation } from '@/redux/types/Match';
import { Player } from '@/redux/types/Player';
import { getGroupName } from '@/utility/getGroupName';
import { getScore } from '@/utility/getScore';

interface MatchDetailsModalProps {
  match: Match;
  group: Group;
  player1: Player;
  player2: Player;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface PlayerScoreProps {
  participation: Participation;
  player: Player;
}

const PlayerScore = ({ player, participation }: PlayerScoreProps) => (
  <Stack alignItems="center">
    <Typography fontSize={'2rem'}>{getScore({ participation })}</Typography>
    <Typography>{`${player.firstName} ${player.lastName}`}</Typography>
  </Stack>
);

const MatchDetailsModal = ({
  match,
  player1,
  player2,
  setOpen,
  open,
  group
}: MatchDetailsModalProps) => {
  return (
    <>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle textAlign={'center'} fontWeight="bold">
          {getGroupName('SINGLE', group.gender, group.category)}
        </DialogTitle>
        <DialogContent>
          <Stack
            mt={2}
            flexDirection="row"
            justifyContent={'space-around'}
            my={6}
            width={'fot-container'}>
            <PlayerScore participation={match.participation1} player={player1} />
            <PlayerScore participation={match.participation2} player={player2} />
          </Stack>
          <PointsTable match={match} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MatchDetailsModal;
