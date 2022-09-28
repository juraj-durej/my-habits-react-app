import { IHabit } from './habit.model';

export interface IHabitRepetition {
  id?: number;
  everyNthDay?: number;
  everyNthMinute?: number;
  everyNthMinuteCount?: number;
  allowRemind?: boolean;
  remindMinutesBefore?: number;
  timeStart?: string;
  dateStart?: string | null;
  dateEnd?: string | null;
  active?: boolean | null;
  habits?: IHabit[] | null;
}

export const defaultValue: Readonly<IHabitRepetition> = {
  allowRemind: false,
  active: true,
};
