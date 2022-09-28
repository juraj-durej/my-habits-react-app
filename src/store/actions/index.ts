import { ActionType } from "../action-types"
import {IHabit} from "../../model/habit.model";

interface CreateAction {
    type: ActionType.CREATE,
    payload: IHabit
}

interface UpdateAction {
    type: ActionType.UPDATE,
    payload: IHabit
}

interface DeletetAction {
    type: ActionType.DELETE,
    payload: IHabit
}

export type Action = CreateAction | UpdateAction | DeletetAction;