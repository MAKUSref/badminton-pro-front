import { TableRow, TableCell, Button, Tooltip, Box } from '@mui/material';
import { useState } from 'react';

import EditUserModal from '../EditUserModal';
import { Player } from '@/redux/types/Player';

//TODO: Suspend User

const UserRow = ({ user }: { user: Player }) => {
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
      <TableCell align="right">{'Brak roli'}</TableCell>
      <TableCell align="right">
        {actionsVisible ? (
          <>
            <EditUserModal savedUser={user} />
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

export default UserRow;
