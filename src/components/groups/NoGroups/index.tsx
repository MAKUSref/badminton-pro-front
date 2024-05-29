import { Stack, Typography } from '@mui/material';

import AddGroupsModal from '@/components/groups/AddGroupsModal';
import COLOR from '@/themes/colors';

const NoGroups = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h2" mb={1}>
        Nie utworzono żadnych grup
      </Typography>
      <Typography color={COLOR.LIGHT_GREY_TEXT} mb={5}>
        Utwórz wybrane kategorie a następnie dodaj zawodników
      </Typography>
      <AddGroupsModal />
    </Stack>
  );
};

export default NoGroups;
