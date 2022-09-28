import { IHabitRepetition } from './habit-repetition.model';

export interface IHabit {
  id?: number;
  name?: string;
  description?: string | null;
  endDate?: string | null;
  active?: boolean | null;
  habitRepetitions?: IHabitRepetition[] | null;
}

export const defaultValue: Readonly<IHabit> = {
  active: true,
};
