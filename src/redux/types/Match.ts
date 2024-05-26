export interface Match {
  participation1: Participation;
  participation2: Participation;
  _id: string;
  startDataTime: string;
  court: number;
}

export interface Participation {
  singleId: string;
  set1: number | null;
  set2: number | null;
  set3: number | null;
}

export type Schedule = Match[][][];
export interface ScheduleResponse {
  schedule: Schedule;
  courts: string;
  rounds: number;
}
