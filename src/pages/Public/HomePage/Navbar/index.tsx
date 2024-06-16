import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

import Logo from '@/components/Logo';

const Navbar = () => {
  return (
    <div className="absolute w-full ">
      <div className="container  ">
        <div className="flex items-center justify-between">
          <div>
            <NavLink to="/#!" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Logo />
            </NavLink>
          </div>
          <div className="hidden sm:block">
            <NavLink to="/login">
              <Button>Zaloguj się</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
