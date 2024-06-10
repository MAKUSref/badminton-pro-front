import { Box, Button, Divider, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const BORDER_COLOR = '#0000001f';
const BG_COLOR_DANGER = '#ffeaea';

interface SettingsSectionProps {
  title: string;
  description: string;
  onSave?: () => void;
  sectionVariant?: 'primary' | 'danger';
  btnLabel?: string;
}

const SettingsSection = ({
  description,
  onSave,
  title,
  children,
  sectionVariant = 'primary',
  btnLabel = 'Zapisz'
}: PropsWithChildren<SettingsSectionProps>) => {
  return (
    <Box
      sx={{ backgroundColor: 'white' }}
      border="1px solid"
      borderRadius={2}
      borderColor={sectionVariant === 'primary' ? BORDER_COLOR : 'red'}
      pt={3}
      mb={4}>
      <Box px={3}>
        <Typography mb={2} variant="h3" fontSize="1.4rem" fontWeight="500">
          {title}
        </Typography>
        <Typography mb={1}>{description}</Typography>
        {children}
      </Box>
      <Divider sx={{ borderColor: sectionVariant === 'primary' ? BORDER_COLOR : 'red' }} />
      <Box
        sx={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
        px={3}
        py={1}
        bgcolor={sectionVariant === 'primary' ? 'transparent' : BG_COLOR_DANGER}>
        <Button
          sx={{ ml: 'auto', display: 'block' }}
          variant="contained"
          color={sectionVariant === 'primary' ? 'primary' : 'error'}
          onClick={onSave}>
          {btnLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsSection;
