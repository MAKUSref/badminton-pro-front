import { Box, Button, Container, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

import Logo from '@/components/Logo';

const Navbar = () => {
  return (
    <Box
      sx={{
        transition: 'background-color 0.3s'
      }}
      position={'absolute'}
      top={0}
      left={0}
      width="100%"
      zIndex={900}>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <NavLink to="/#!" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Logo />
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/login">
              <Button>Zaloguj się</Button>
            </NavLink>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
