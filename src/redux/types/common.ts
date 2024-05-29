/* eslint-disable no-unused-vars */
export type Gender = 'MAN' | 'WOMAN';
export type GroupType = 'SINGLE' | 'MIX' | 'DOUBLE';
export type Id = string | null;

export type Role = 'ADMIN' | 'JUDGE' | 'PLAYER';
export type RecordType = 'doubles' | 'singles';
export enum TournamentStatus {
  ADDING_PLAYERS_GROUPS = 'ADDING_PLAYERS_GROUPS',
  REGISTER_PLAYERS = 'REGISTER_PLAYERS',
  CLOSED = 'CLOSED'
}
export const DATE_FORMAT = 'DD-MM-YYYY';
export const TIME_FORMAT = 'HH:mm';
