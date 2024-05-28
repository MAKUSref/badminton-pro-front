import { Participation } from '@/redux/types/Match';

interface SetScoreProps {
  participation: Participation;
}

export const getScore = ({ participation: { set1, set2, set3 } }: SetScoreProps) => {
  if (!set1 || !set3 || !set2) return '-';
  if (set1 === 21 && set2 === 21) return '3';
  else if ((set1 === 21 && set3 === 21) || (set2 === 21 && set3 === 21)) return '2';
  else if ((set1 === 21 && set3 < 21) || (set2 === 21 && set3 < 21)) return '1';
  else return '0';
};
