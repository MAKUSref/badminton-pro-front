export interface Match {
  participation1: Participation;
  participation2: Participation;
  _id: string;
  startDataTime: string;
  court: number;
}

export interface MatchWithoutId extends Omit<Match, '_id'> {}

export interface Participation {
  singleId: string;
  set1: number | null;
  set2: number | null;
  set3: number | null;
}

// export type Schedule = Match[][][];
export interface ScheduleResponse {
  schedule: Match[][][];
  startTime: string;
  endTime: string;
  courtCount: number;
  startDate: string;
  rounds: number;
}

export interface ScheduleDetails {
  schedule: string[][][];
  startTime: string;
  endTime: string;
  courtCount: number;
  startDate: string;
  rounds: number;
}
