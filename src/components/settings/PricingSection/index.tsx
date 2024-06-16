import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const BORDER_COLOR = '#0000001f';
import CHECK_IMG from '@/assets/check.png';

const pros = [
  'Możliwość organizacji wielu turnieji',
  'Przegląd wcześniej rozegranych turniejów',
  'Generowanie terminarza dla gier typu Singiel, mixt oraz debel'
];

interface PricingSectionProps {
  onSave?: () => void;
}

const PricingSection = ({ onSave }: PropsWithChildren<PricingSectionProps>) => {
  return (
    <Box
      sx={{ backgroundColor: '#8994f0', color: 'white' }}
      border="1px solid"
      borderRadius={2}
      // className="bg-[#8994f0]"
      borderColor={BORDER_COLOR}
      pt={3}
      mb={4}>
      <Box px={3}>
        <Typography mb={2} variant="h3" fontSize="1.4rem" fontWeight="500">
          Wersja Rozszerzona
        </Typography>
        <Typography mb={1}>Rozszerz swój plan by móc tworzyć więcej turnieji!</Typography>
        <Stack my={4} gap={0.5}>
          {pros.map((pro) => (
            <Stack key={pro} flexDirection={'row'} alignItems="start" gap={1}>
              <img src={CHECK_IMG} width={25} /> <Typography>{pro}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Divider sx={{ BORDER_COLOR }} />
      <Box
        sx={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
        px={3}
        py={1}
        bgcolor={'white'}>
        <Button
          sx={{ ml: 'auto', display: 'block' }}
          variant="contained"
          color={'primary'}
          onClick={onSave}>
          Dołącz
        </Button>
      </Box>
    </Box>
  );
};

export default PricingSection;
