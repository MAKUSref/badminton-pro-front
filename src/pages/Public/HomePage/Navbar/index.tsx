import { Box, Button, Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        transition: 'background-color 0.3s'
      }}
      bgcolor={isScrolled ? 'white' : 'transparent'}
      position="fixed"
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
