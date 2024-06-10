import { Stack, Typography } from '@mui/material';

import LOGO_IMG from '@/assets/logo.svg';
import LOGO_DARK_IMG from '@/assets/logo-dark.svg';
import COLOR from '@/themes/colors';

interface LogoProps {
  mode?: 'Light' | 'Dark';
}

const Logo = ({ mode = 'Light' }: LogoProps) => {
  return (
    <Stack direction="row" alignItems="center" mt={1}>
      <img
        src={mode === 'Light' ? LOGO_IMG : LOGO_DARK_IMG}
        alt="logo"
        style={{ width: mode === 'Light' ? '16px' : '20px' }}
      />
      <Typography ml={1}>
        <Typography
          fontFamily="Rubik Mono One"
          fontWeight="bold"
          variant="overline"
          color={mode === 'Light' ? 'inherit' : 'white'}
          fontSize={mode === 'Light' ? '1rem' : '1.5rem'}>
          BADMINTON
        </Typography>
        <Typography
          fontFamily="Rubik Mono One"
          fontWeight="bold"
          variant="overline"
          fontSize={mode === 'Light' ? '1rem' : '1.5rem'}
          color={mode == 'Light' ? COLOR.PRIMARY : '#263238'}>
          PRO
        </Typography>
      </Typography>
    </Stack>
  );
};

export default Logo;
