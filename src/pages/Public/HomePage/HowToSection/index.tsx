import { Container, Grid, Typography } from '@mui/material';

import COLOR from '@/themes/colors';

const HowToSection = () => {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" mb={3}>
              1. Zapisz zawodników
            </Typography>
            <Typography color={COLOR.LIGHT_GREY_TEXT} mb={2}>
              Wprowadź zawodników do systemu. Możesz to zrobić ręcznie lub zaimportować plik CSV!
            </Typography>
            <Typography color={COLOR.LIGHT_GREY_TEXT} mb={5}>
              Plik musi zawierać kolejno:
              <Typography color="primary" fontWeight="bold">
                Imię, Nazwisko, płeć, email, numer telefonu.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HowToSection;
