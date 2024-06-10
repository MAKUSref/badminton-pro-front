import CopyAllRoundedIcon from '@mui/icons-material/CopyAllRounded';
import { Box, Typography, Stack, TextField, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';

const LINK = 'localhost:5173/tournament/2ff7b43f78d1';
const BORDER_COLOR = '#0000001f';

const CopySection = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const copy = () => {
    navigator.clipboard.writeText(LINK);
    handleTooltipOpen();
  };

  return (
    <Box
      sx={{ bgcolor: 'white' }}
      border="1px solid"
      borderRadius={2}
      borderColor={BORDER_COLOR}
      pt={3}
      mb={4}>
      <Box px={3}>
        <Typography mb={2} variant="h3" fontSize="1.4rem" fontWeight="500">
          Link do turnieju
        </Typography>
        <Typography mb={3}>
          Bezpośredni link do turnieju, który możesz udostępnić innym by mogli obserować wyniki
        </Typography>
        <Stack flexDirection="row" gap={2} mb={4} maxWidth="700px">
          <TextField size="small" label="Link do turnieju" value={LINK} fullWidth />
          <div onMouseLeave={handleTooltipClose}>
            <Tooltip
              PopperProps={{
                disablePortal: true
              }}
              placement="top"
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Copied to Clipboard">
              <IconButton onClick={copy}>
                <CopyAllRoundedIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Stack>
      </Box>
    </Box>
  );
};

export default CopySection;
