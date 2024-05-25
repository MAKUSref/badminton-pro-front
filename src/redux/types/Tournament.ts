export interface Tournament {
  name: string;
  date: string;
  bgImg: string;
}

export interface TournamentWithoutId extends Omit<Tournament, '_id'> {}
