import { IHabitRepetition } from './habit-repetition.model';

export interface IHabitCompleted {
  id?: number;
  completedAt?: string | null;
  habitRepetition?: IHabitRepetition | null;
}
