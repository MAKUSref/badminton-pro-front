import dayjs from 'dayjs';

import { DATE_FORMAT } from '@/redux/types/common';

export function dateToString(date: string) {
  return dayjs(date, DATE_FORMAT).format('DD MMMM YYYY');
}
