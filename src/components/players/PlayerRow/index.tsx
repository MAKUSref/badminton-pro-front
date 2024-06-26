import { TableRow, TableCell, Button, Tooltip, Box } from '@mui/material';
import { useState } from 'react';

import EditPlayerModal from '../EditPlayerModal';
import { Player } from '@/redux/types/Player';
import RoleChip from '../RoleChip';

//TODO: Suspend User

const PlayerRow = ({ user }: { user: Player }) => {
  const [actionsVisible, setActionsVisible] = useState(false);

  return (
    <TableRow
      key={user._id}
      hover
      onMouseOver={() => setActionsVisible(true)}
      onMouseOut={() => setActionsVisible(false)}>
      <TableCell component="th" scope="row">
        {user.firstName} {user.lastName}
      </TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phoneNumber}</TableCell>
      <TableCell align="right">
        <RoleChip role="PLAYER" />
      </TableCell>
      <TableCell align="right">
        {actionsVisible ? (
          <>
            <EditPlayerModal savedPlayer={user} />
            <Tooltip title="Zawieś konto" placement="top">
              <Button disabled color="error">
                Zawieś
              </Button>
            </Tooltip>
          </>
        ) : (
          <Box width="120px" height="35px" />
        )}
      </TableCell>
    </TableRow>
  );
};

export default PlayerRow;
