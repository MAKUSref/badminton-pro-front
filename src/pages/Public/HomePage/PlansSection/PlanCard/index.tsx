import { Button, Stack, Typography } from '@mui/material';

import CHECK_IMG from '@/assets/check.png';
import EXTRA_PLAN from '@/assets/extra-plan-icon.png';

interface PlanCardProps {
  title: string;
  desc: string;
  btnText: string;
  main?: boolean;
  pros: string[];
}

const PlanCard = ({ pros, main, title, desc, btnText }: PlanCardProps) => {
  return (
    <div className="flex flex-col items-center relative">
      {main && <img src={EXTRA_PLAN} width={100} style={{ position: 'absolute', top: -70 }} />}
      <Stack
        boxShadow={main ? '0px 0px 33px 0px rgba(74, 92, 249, 1)' : 3}
        p={4}
        bgcolor={'white'}
        alignItems="center"
        justifyContent="space-between"
        width={350}
        height={400}
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
    </div>
  );
};

export default PlanCard;
