import { Box, Container, Stack, TextField, Typography } from '@mui/material';
import { useMemo } from 'react';

import SettingsSection from '@/components/settings/SettingsSection';
import { useAppSelector } from '@/redux/store';

const ProfiePage = () => {
  const { accounts, sessionToken } = useAppSelector((state) => state.currentSession);

  const user = useMemo(() => accounts?.find((acc) => acc.id === sessionToken), []);

  return (
    <Container>
      <Stack my={5}>
        <Typography variant="h2" mt={2} mb={4}>
          Moje konto
        </Typography>
        <SettingsSection title="Imie i nazwisko" description="Zmiana danych osobowych.">
          <Box my={2} maxWidth="650px">
            <TextField size="small" label="Imie" defaultValue={user?.firstName} fullWidth />
          </Box>
          <Box my={2} maxWidth="650px">
            <TextField size="small" label="Nazwisko" defaultValue={user?.lastName} fullWidth />
          </Box>
        </SettingsSection>

        <SettingsSection
          title="Zmiana adresu e-mail"
          description="Zmiana adresu e-mail wiążę się z koniecznością ponownego potwierdzenia go.">
          <Box my={2} maxWidth="650px">
            <TextField size="small" label="E-mail" defaultValue={user?.email} fullWidth />
          </Box>
        </SettingsSection>

        <SettingsSection
          title="Zmiana hasła"
          description="Tutaj możesz zmienić swoje stare hasło na nowe.">
          <Box my={2} maxWidth="650px">
            <TextField size="small" label="Nowe hasło" fullWidth type="password" />
          </Box>
          <Box my={2} maxWidth="650px">
            <TextField size="small" label="Powtórz nowe hasło" fullWidth type="password" />
          </Box>
        </SettingsSection>

        <SettingsSection
          title="Usuń konto"
          description="Uwaga! Ta opcja bezpowrotnie usunie twój profil."
          btnLabel="Usuń"
          sectionVariant="danger"></SettingsSection>
      </Stack>
    </Container>
  );
};

export default ProfiePage;
