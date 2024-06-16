import { Stack, Typography } from '@mui/material';

import LOGO_DARK_IMG from '@/assets/logo-dark.svg';
import LOGO_IMG from '@/assets/logo.svg';
import COLOR from '@/themes/colors';

interface LogoProps {
  mode?: 'light' | 'dark';
  size?: 'small' | 'large';
}

const Logo = ({ mode = 'light', size = 'small' }: LogoProps) => {
  return (
    <Stack direction="row" alignItems="center" mt={1}>
      <img
        src={mode === 'light' ? LOGO_IMG : LOGO_DARK_IMG}
        alt="logo"
        style={{ width: size === 'small' ? '16px' : '20px' }}
      />
      <Typography ml={1}>
        <Typography
          fontFamily="Rubik Mono One"
          fontWeight="bold"
          variant="overline"
          color={mode === 'light' ? 'inherit' : 'white'}
          fontSize={size === 'small' ? '1rem' : '1.5rem'}>
          BADMINTON
        </Typography>
        <Typography
          fontFamily="Rubik Mono One"
          fontWeight="bold"
          variant="overline"
          fontSize={size === 'small' ? '1rem' : '1.5rem'}
          color={mode == 'light' ? COLOR.PRIMARY : '#263238'}>
          PRO
        </Typography>
      </Typography>
    </Stack>
  );
};

export default Logo;
