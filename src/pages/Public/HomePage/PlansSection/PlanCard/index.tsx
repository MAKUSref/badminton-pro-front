import { Button, Stack, Typography } from '@mui/material';
import CHECK_IMG from '@/assets/check.png';

interface PlanCardProps {
  title: string;
  desc: string;
  btnText: string;
  main?: boolean;
  pros: string[];
}

const PlanCard = ({ pros, main, title, desc, btnText }: PlanCardProps) => {
  return (
    <Stack
      boxShadow={main ? '0px 0px 33px 0px rgba(74, 92, 249, 1)' : 3}
      p={4}
      bgcolor={'white'}
      alignItems="center"
      justifyContent="space-between"
      width={300}
      height={320}
      borderRadius={5}>
      <Stack alignItems="center" mt={3}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          {title}
        </Typography>
        <Typography textAlign={'center'}>{desc}</Typography>
      </Stack>
      <Stack>
        <Stack my={4} gap={0.5}>
          {pros.map((pro) => (
            <Stack key={pro} flexDirection={'row'} alignItems="start" gap={1}>
              <img src={CHECK_IMG} width={25} /> <Typography>{pro}</Typography>
            </Stack>
          ))}
        </Stack>

        <Button variant={main ? 'contained' : 'outlined'} fullWidth sx={{ width: '100%' }}>
          {btnText}
        </Button>
      </Stack>
    </Stack>
  );
};

export default PlanCard;
