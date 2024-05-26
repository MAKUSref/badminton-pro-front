import dayjs from 'dayjs';

import { TIME_FORMAT } from '@/redux/types/common';
import { Match } from '@/redux/types/Match';

export function getNumberOfEmptyBlock(startDataTime1: string, startDataTime2: string) {
  const startTime1 = dayjs(startDataTime1, TIME_FORMAT);
  const startTime2 = dayjs(startDataTime2, TIME_FORMAT).add(30, 'minute');

  return startTime2.diff(startTime1, 'minute') / 30;
}

export function sortMatches(singles: Match[]) {
  const singlesStartTime = dayjs(singles[0].startDataTime, TIME_FORMAT).get('hours');
  return [{ name: 's', hours: singlesStartTime }]
    .sort((a, b) => a.hours - b.hours)
    .map((value) => value.name);
}

export function cmp(a: string[], b: string[]) {
  if (a.length != b.length || a.length != 3) return true;
  if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) return true;
  return false;
}
