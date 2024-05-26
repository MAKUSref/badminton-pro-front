import { Stack, Typography } from '@mui/material';

import LOGO_IMG from '@/assets/logo.svg';
import COLOR from '@/themes/colors';

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" mt={1}>
      <img src={LOGO_IMG} alt="logo" />
      <Typography fontWeight="bold" fontSize=".8rem" ml={1}>
        BADMINTON
      </Typography>
      <Typography fontWeight="bold" color={COLOR.PRIMARY} fontSize=".8rem">
        PRO
      </Typography>
    </Stack>
  );
};

export default Logo;
