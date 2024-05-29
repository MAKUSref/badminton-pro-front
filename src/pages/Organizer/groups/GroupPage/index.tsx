import { Container, Grid, Typography } from '@mui/material';
import { PropsWithChildren, useMemo } from 'react';

import NoGroups from '@/components/groups/NoGroups';
import { GroupType, TournamentStatus } from '@/redux/types/common';
import { useAppSelector } from '@/redux/store';

interface AddPlayerToGroupModalProps extends PropsWithChildren {
  groupType: GroupType;
  isEmpty: boolean;
}

const GroupPage = ({ children, isEmpty }: AddPlayerToGroupModalProps) => {
  const isLogged = useAppSelector((state) => !!state.currentSession.sessionToken);
  const status = useAppSelector((state) => state.currentSession.tournamentStatus);
  const displayedInfo = useMemo(
    () => status === TournamentStatus.ADDING_PLAYERS_GROUPS && isLogged,
    [status, isLogged]
  );

  if (isEmpty) {
    return (
      <Container>
        <NoGroups />
      </Container>
    );
  }

  return (
    <Container sx={{ pb: 10, mt: 5 }}>
      <Typography variant="h2" mt={2}>
        Single
      </Typography>
      {displayedInfo && (
        <Typography mt={1} color={'red'} fontSize={'.6rem'}>
          Musisz najpierw zatwierdzić zawodników aby przypisac ich do grup
        </Typography>
      )}
      <Grid container>{children}</Grid>
    </Container>
  );
};

export default GroupPage;
