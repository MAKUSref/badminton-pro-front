import { CircularProgress, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState, SyntheticEvent } from 'react';

import CLUB_LOGO_IMG from '@/assets/club-logo.png';
import ScheduleTable from '@/components/schedule/ScheduleTable';
import SinglesPage from '@/pages/Organizer/groups/SinglesPage';
import { useGetScheduleQuery } from '@/redux/api/scheduleApi';
import { useGetMyTournamentQuery } from '@/redux/api/tournamentApi';

const ScheduleContainer = () => {
  const { data: scheduleDetails, isLoading } = useGetScheduleQuery();

  if (isLoading) {
    return <CircularProgress sx={{ justifySelf: 'center' }} size={20} />;
  }

  return scheduleDetails && <ScheduleTable scheduleDetails={scheduleDetails} />;
};

const TournamentPage = () => {
  const { data: tournament } = useGetMyTournamentQuery();
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Stack
        sx={{
          backgroundImage: `url(${tournament?.bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        flexDirection="row"
        height="150px"
        p={4}
        gap={2}
        alignItems="flex-end">
        <img src={CLUB_LOGO_IMG} alt="bg-mg" height={'70px'} />
        <Stack>
          <Typography variant="h2" color="white">
            {tournament?.name}
          </Typography>
          <Typography color="white">16.07.2024, Włocławek ul. Szkolna 13 </Typography>
        </Stack>
      </Stack>
      <Container>
        <Tabs value={value} onChange={handleChange} sx={{ mb: 3 }}>
          <Tab label={'Mecze'} />
          <Tab label={'Grupy'} />
          <Tab label={'O turnieju'} />
        </Tabs>
        {value === 0 && <ScheduleContainer />}
        {value === 1 && <SinglesPage />}
      </Container>
    </Stack>
  );
};

export default TournamentPage;
