import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import SideNav from '@/components/SideNav';

const Organizer = () => {
  return (
    <Stack flexDirection="row" boxSizing="border-box" height="100vh">
      <div className="bg-pattern"></div>
      <SideNav />
      <Box minWidth="250px" height="100%" />
      <Outlet />
    </Stack>
  );
};

export default Organizer;
