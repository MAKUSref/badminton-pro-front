import { Box, Container, Stack, TextField, Typography } from '@mui/material';

import CopySection from '@/components/settings/CopySection';
import SettingsSection from '@/components/settings/SettingsSection';
import { useGetMyTournamentQuery } from '@/redux/api/tournamentApi';

const SettingsPage = () => {
  const { data: tournament } = useGetMyTournamentQuery();

  return (
    <Container>
      <Stack my={5}>
        <Typography variant="h2" mt={2} mb={4}>
          Ustawienia Turnieju
        </Typography>
        <CopySection />
        <SettingsSection
          title="Nazwa turnieju"
          description="Reprezentatywna nazwa turnieju, którą będą widzieć wszyscy użytkownicy. Po tej nazwie
            powinien być rozpoznawany turniej.">
          <Box my={2} maxWidth="650px">
            <TextField
              size="small"
              label="Nazwa turnieju"
              defaultValue={tournament?.name}
              fullWidth
            />
          </Box>
        </SettingsSection>
        <SettingsSection
          title="Opis turnieju"
          description="Ten tekst pojawi się każdemu użytkownikowi pod nazwą turnieju. Możesz tu umieścić datę oraz lokalizację.">
          <Box my={2} maxWidth="650px">
            <TextField
              size="small"
              label="Opis turnieju"
              fullWidth
              defaultValue={'16.07.2024, Włocławek ul. Szkolna 13'}
            />
          </Box>
        </SettingsSection>

        <SettingsSection title="Zdjęcie" description="Zdjęcie w tle turnieju" btnLabel="Zmień">
          <Box my={2} maxWidth="650px">
            <img src={tournament?.bgImg} width={'660px'} style={{ borderRadius: '7px' }} />
          </Box>
        </SettingsSection>
        <SettingsSection
          sectionVariant="danger"
          btnLabel="Usuń turniej"
          title="Usuń turniej"
          description="Uwaga! Ta opcja bezpowrotnie usuwa turniej."></SettingsSection>
      </Stack>
    </Container>
  );
};

export default SettingsPage;
