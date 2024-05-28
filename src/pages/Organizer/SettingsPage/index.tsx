import { Box, Container, TextField, Typography } from '@mui/material';

import SettingsSection from '@/components/SettingsSection';

const SettingsPage = () => {
  return (
    <Container>
      <Typography variant="h2" mt={2} mb={4}>
        Ustawienia Turnieju
      </Typography>
      <SettingsSection
        title="Nazwa turnieju"
        description="Reprezentatywna nazwa turnieju, którą będą widzieć wszyscy użytkownicy. Po tej nazwie
            powinien być rozpoznawany turniej.">
        <Box my={2}>
          <TextField size="small" label="Nazwa turnieju" />
        </Box>
      </SettingsSection>
      <SettingsSection
        title="Opis turnieju"
        description="Ten tekst pojawi się każdemu użytkownikowi pod nazwą turnieju.">
        <Box my={2} maxWidth="650px">
          <TextField size="small" label="Opis turnieju" fullWidth />
        </Box>
      </SettingsSection>
      <SettingsSection
        sectionVariant="danger"
        btnLabel="Usuń turniej"
        title="Usuń turniej"
        description="Ten turniej zostanie permamentie usunięty. Również z historii."></SettingsSection>
    </Container>
  );
};

export default SettingsPage;
