import PlanCard from './PlanCard';

import OVAL_BG from '@/assets/footer-oval-bg.svg';

const PlansSection = () => {
  return (
    <div className="relative pt-10">
      <img src={OVAL_BG} className="absolute bottom-0 w-full -z-10 -mb-1" />
      <div className="flex flex-col-reverse sm:flex-row gap-5 justify-center">
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
      </div>
    </div>
  );
};

export default PlansSection;
