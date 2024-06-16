import { Box, Container, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import PayModal from './PayModal';

import PricingSection from '@/components/settings/PricingSection';
import SettingsSection from '@/components/settings/SettingsSection';
import { useAppSelector } from '@/redux/store';

const ProfilePage = () => {
  const { accounts, sessionToken } = useAppSelector((state) => state.currentSession);
  const [isActivated, setIsActivated] = useState(false);
  const [open, setOpen] = useState(false);
  const user = useMemo(() => accounts?.find((acc) => acc.id === sessionToken), []);

  return (
    <Container>
      <Stack my={5}>
        <Typography variant="h2" mt={2} mb={4}>
          Moje konto
        </Typography>
        {!isActivated && <PricingSection onSave={() => setOpen(true)} />}

        <SettingsSection
          title="Nazwa organizatora"
          description="Zmiana danych organizatora turnieju">
          <Box my={2} maxWidth="650px">
            <TextField size="small" label="Imie" defaultValue={user?.organizatorName} fullWidth />
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
        {isActivated && (
          <>
            <SettingsSection
              title="Zmień dane karty"
              description="Zmień dane karty płatniczej, którą opłacasz subskrypcję wersji rozszerzonej"
              btnLabel="Zmień"
              sectionVariant="primary"
              onSave={() => {
                setOpen(true);
              }}
            />
            <SettingsSection
              title="Anuluj subskrypcję"
              description="Uwaga! Jak anulujesz subskrypcję stracisz dostęp oraz dane do wcześniej odbytych turnieji"
              btnLabel="Anuluj subskrypcję"
              sectionVariant="danger"
              onSave={() => setIsActivated(false)}
            />
          </>
        )}
      </Stack>
      <PayModal
        onSave={() => {
          setIsActivated(true);
          toast.success('Twoje konto jest teraz w rozszerzonej wersji');
        }}
        close={() => setOpen(false)}
        open={open}
      />
    </Container>
  );
};

export default ProfilePage;
