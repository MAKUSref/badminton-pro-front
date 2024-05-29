import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { TableRow, TableCell, Tooltip, Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import { useGetPlayerByIdQuery } from '@/redux/api/playerApi';
import { useGetRegisterStatusQuery } from '@/redux/api/registerStatusApi';
import { useGetSingleScoreByIdQuery } from '@/redux/api/singlesApi';
import { useAppSelector } from '@/redux/store';
import { TournamentStatus } from '@/redux/types/common';
import { Single } from '@/redux/types/Group';

interface PlayerRowProps {
  index: number;
  single: Single;
  onRemoveClick: () => void;
}

const PlayerRow = ({ single: { playerId, _id }, index, onRemoveClick }: PlayerRowProps) => {
  const { data: player } = useGetPlayerByIdQuery(playerId);
  const [actionsVisible, setActionsVisible] = useState(false);
  const { data: registerStatus } = useGetRegisterStatusQuery();
  const { data: score } = useGetSingleScoreByIdQuery({ id: _id });
  const isLogged = useAppSelector((state) => !!state.currentSession.sessionToken);

  return (
    <TableRow
      hover={isLogged}
      onMouseOver={() => setActionsVisible(true)}
      onMouseOut={() => {
        setActionsVisible(false);
      }}>
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell component="th" scope="row">
        <Typography>
          {player?.firstName} {player?.lastName}
        </Typography>
      </TableCell>
      <TableCell component="th" scope="row">
        <Typography>
          {score?.playedMatches}/{score?.allMatches}
        </Typography>
      </TableCell>
      <TableCell component="th" scope="row">
        <Typography fontWeight="bold">{score?.score}</Typography>
      </TableCell>
      {isLogged && (
        <TableCell align="right">
          {actionsVisible && registerStatus === TournamentStatus.REGISTER_PLAYERS ? (
            <Tooltip title="Usuń z grupy" placement="top">
              <IconButton onClick={onRemoveClick}>
                <DeleteRoundedIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Box width="35px" height="35px" />
          )}
        </TableCell>
      )}
    </TableRow>
  );
};

export default PlayerRow;
