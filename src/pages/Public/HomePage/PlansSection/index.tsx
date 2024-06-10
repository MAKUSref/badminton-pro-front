import { Stack } from '@mui/material';
import OVAL_BG from '@/assets/footer-oval-bg.svg';
import PlanCard from './PlanCard';

const PlansSection = () => {
  return (
    <Stack position={'relative'} pt={10}>
      <img
        src={OVAL_BG}
        style={{ marginBottom: -1, position: 'absolute', bottom: 0, zIndex: -1 }}
      />
      <Stack flexDirection="row" alignItems="center" justifyContent="center" gap={5}>
        <PlanCard
          title="Wersja darmowa"
          desc="Sprawdź jak działa nasz system!"
          pros={[
            'Możliwość organizacji jednego turnieju',
            'Generowanie terminarza dla gier typu Singiel'
          ]}
          btnText="Wypróbuj"
        />
        <PlanCard
          title="Wersja rozszerzona"
          desc="Regularnie organizujesz turnieje? Zapewnij sobie dostęp do wszystkich możliwości naszego systemu! "
          pros={[
            'Możliwość organizacji wielu turnieji',
            'Przegląd wcześniej rozegranych turniejów',
            'Generowanie terminarza dla gier typu Singiel, mixt oraz debel'
          ]}
          btnText="Kup 60 zł/mies"
          main={true}
        />
      </Stack>
    </Stack>
  );
};

export default PlansSection;
