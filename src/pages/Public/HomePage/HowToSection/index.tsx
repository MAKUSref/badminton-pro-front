import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import HOW_TO_1 from '@/assets/how-to-1.svg';
import HOW_TO_2 from '@/assets/how-to-2.svg';
import HOW_TO_3 from '@/assets/how-to-3.svg';
import HOW_TO_4 from '@/assets/how-to-4.svg';
import HOW_TO_5 from '@/assets/how-to-5.svg';

const HowToSection = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-center">
              <img className="w-full max-w-[500px] inline-block" src={HOW_TO_1} />
            </div>
          </div>
          <div>
            <Stack height="100%" justifyContent="center">
              <Typography variant="h2" mb={3}>
                1. Zapisz zawodników
              </Typography>
              <Typography mb={2}>
                Wprowadź zawodników do systemu. Możesz to zrobić ręcznie lub zaimportować plik CSV!
              </Typography>
              <Typography mb={5}>
                Plik musi zawierać kolejno:
                <br />
                <Typography variant="caption" fontSize="inherit" color="primary" fontWeight="bold">
                  Imię, Nazwisko, płeć, email, numer telefonu.
                </Typography>
              </Typography>
            </Stack>
          </div>
        </div>

        <Grid container spacing={5} mt="120px">
          <Grid item xs={12} md={6}>
            <Stack height="100%" justifyContent="center">
              <Typography variant="h2" mb={3}>
                2. Utwórz grupy
              </Typography>
              <Typography mb={2}>
                Utwórz grupy według własnego uznania - nazwij je jak chcesz! Przewidziane są dwa
                typy gier - <strong>singiel męski i damski</strong>.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <img style={{ width: '100%', maxWidth: '300px' }} src={HOW_TO_2} />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt="120px">
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <img style={{ width: '100%', maxWidth: '500px' }} src={HOW_TO_3} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack height="100%" justifyContent="center">
              <Typography variant="h2" mb={3}>
                3. Przypisz zawodników do grup
              </Typography>
              <Typography mb={2}>
                Pamiętaj, że grupa powinna zawierać <strong>minimum 3 zawodników!</strong>
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt="120px">
          <Grid item xs={12} md={6}>
            <Stack height="100%" justifyContent="center">
              <Typography variant="h2" mb={3}>
                4. Wygeneruj terminarz
              </Typography>
              <Typography mb={2}>
                Możesz wybrać odpowiedni <strong>termin, ilość kortów</strong> oraz preferowany{' '}
                <strong>czas</strong> pierwszego oraz ostatniego meczu. Nasz algorytm wygeneruje
                taki terminarz by odpowiadał twoim potrzebom.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <img style={{ width: '100%', maxWidth: '450px' }} src={HOW_TO_4} />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt="120px" mb={10}>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <img style={{ width: '100%', maxWidth: '300px' }} src={HOW_TO_5} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack height="100%" justifyContent="center">
              <Typography variant="h2" mb={3}>
                5. Upublicznij turniej
              </Typography>
              <Typography mb={2}>
                Wygeneruj link, który będzie zawierał terminarz, rankingi zawodników. Możesz dodać
                własny opis oraz tło!
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HowToSection;
