import { Id } from './common';

export interface Player {
  _id: Id;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  singleId?: Id;
}

export interface PlayerWithoutId extends Omit<Player, '_id'> {}
