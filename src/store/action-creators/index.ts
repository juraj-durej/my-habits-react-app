import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"
import {IHabit} from "../../model/habit.model";

export const createHabit = (object: IHabit) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CREATE,
            payload: object
        })
    }
}

export const updateHabit = (object: IHabit) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload: object
        })
    }
}

export const deleteHabit = (object: IHabit) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE,
            payload:object
        })
    }
}