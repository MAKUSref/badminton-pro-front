import { Stack, Typography } from '@mui/material';

import LOGO_IMG from '@/assets/logo.svg';
import COLOR from '@/themes/colors';

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" mt={1}>
      <img src={LOGO_IMG} alt="logo" style={{ width: '16px' }} />
      <Typography ml={1}>
        <Typography
          fontFamily="Rubik Mono One"
          fontWeight="bold"
          variant="overline"
          fontSize="1rem">
          BADMINTON
        </Typography>
        <Typography
          fontFamily="Rubik Mono One"
          fontWeight="bold"
          variant="overline"
          fontSize="1rem"
          color={COLOR.PRIMARY}>
          PRO
        </Typography>
      </Typography>
    </Stack>
  );
};

export default Logo;
