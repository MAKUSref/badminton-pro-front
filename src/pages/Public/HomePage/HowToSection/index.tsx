import { Typography } from '@mui/material';

import HOW_TO_1 from '@/assets/how-to-1.svg';
import HOW_TO_2 from '@/assets/how-to-2.svg';
import HOW_TO_3 from '@/assets/how-to-3.svg';
import HOW_TO_4 from '@/assets/how-to-4.svg';
import HOW_TO_5 from '@/assets/how-to-5.svg';

const HowToSection = () => {
  return (
    <section>
      <div className="container flex flex-col gap-20 mb-32">
        <div className="flex gap-16 flex-col-reverse sm:flex-row">
          <div>
            <img src={HOW_TO_1} />
          </div>
          <div>
            <Typography variant="h2" mb={3}>
              1. Zapisz zawodników
            </Typography>
            <Typography mb={2}>
              Wprowadź zawodników do systemu. Możesz to zrobić ręcznie lub zaimportować plik CSV!
            </Typography>
            <Typography mb={5}>
              Plik musi zawierać kolejno:
              <br />
              <Typography variant="caption" fontSize="inherit" color="primary" fontWeight="bold">
                Imię, Nazwisko, płeć, email, numer telefonu.
              </Typography>
            </Typography>
          </div>
        </div>
        <div className="flex gap-16 flex-col sm:flex-row">
          <div>
            <Typography variant="h2" mb={3}>
              2. Utwórz grupy
            </Typography>
            <Typography mb={5}>
              Utwórz grupy według własnego uznania - nazwij je jak chcesz! Przewidziane są dwa typy
              gier - <strong>singiel męski i damski</strong>.
            </Typography>
          </div>
          <div className="">
            <img className="" src={HOW_TO_2} />
          </div>
        </div>
        <div className="flex gap-16 flex-col-reverse sm:flex-row">
          <div>
            <img src={HOW_TO_3} />
          </div>
          <div>
            <Typography variant="h2" mb={3}>
              3. Przypisz zawodników do grup
            </Typography>
            <Typography mb={2}>
              Pamiętaj, że grupa powinna zawierać <strong>minimum 3 zawodników!</strong>
            </Typography>
          </div>
        </div>

        <div className="flex gap-16 flex-col sm:flex-row">
          <div>
            <Typography variant="h2" mb={3}>
              4. Wygeneruj terminarz
            </Typography>
            <Typography mb={5}>
              Możesz wybrać odpowiedni <strong>termin, ilość kortów</strong> oraz preferowany{' '}
              <strong>czas</strong> pierwszego oraz ostatniego meczu. Nasz algorytm wygeneruje taki
              terminarz by odpowiadał twoim potrzebom.
            </Typography>
          </div>
          <div className="text-center min-w-[300px]">
            <img className="" src={HOW_TO_4} />
          </div>
        </div>
        <div className="flex gap-16 flex-col-reverse sm:flex-row">
          <div>
            <img src={HOW_TO_5} />
          </div>
          <div>
            <Typography variant="h2" mb={3}>
              5. Upublicznij turniej
            </Typography>
            <Typography mb={2}>
              Wygeneruj link, który będzie zawierał terminarz, rankingi zawodników. Możesz dodać
              własny opis oraz tło!
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
