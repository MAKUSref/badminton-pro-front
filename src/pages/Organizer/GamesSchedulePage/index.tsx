import { Box, CircularProgress, Container, Stack, Typography } from '@mui/material';

import GenerateScheduleModal from '@/components/schedule/GenerateScheduleModal';
import ScheduleTable from '@/components/schedule/ScheduleTable';
import { useGetScheduleQuery } from '@/redux/api/scheduleApi';
import COLOR from '@/themes/colors';

const GamesSchedulePage = () => {
  const { data: scheduleDetails, isLoading } = useGetScheduleQuery();

  if (isLoading) {
    return (
      <Container>
        <CircularProgress sx={{ justifySelf: 'center' }} size={20} />
      </Container>
    );
  }

  return (
    <Container>
      {scheduleDetails ? (
        <Box mt={4}>
          <ScheduleTable scheduleDetails={scheduleDetails} />
        </Box>
      ) : (
        <Stack alignItems="center" justifyContent="center" height="100%">
          <Typography variant="h2" mb={1}>
            Utwórz terminarz meczy do turnieju
          </Typography>
          <Typography color={COLOR.LIGHT_GREY_TEXT} mb={3} mt={1}>
            Wygeneruj terminarz meczy, jeżeli będzie ci odpowiadał zatwierdź go!
            <br /> Pamiętaj, że jeżeli zapiszesz terminarz, nie będziesz mógł zmienić grup.
          </Typography>
          <GenerateScheduleModal />
        </Stack>
      )}
    </Container>
  );
};

export default GamesSchedulePage;
