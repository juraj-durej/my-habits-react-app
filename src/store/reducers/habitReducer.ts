import { ActionType } from "../action-types"
import { Action } from "../actions"

const initialState = 0;

const habitReducer = (state: number = initialState, action: Action): number => {
    switch (action.type){
        case ActionType.CREATE:
            return state + action.payload;
        case ActionType.UPDATE:
            return state - action.payload;
        case ActionType.DELETE:
            return state + action.payload;
        default:
            return state
    }
}

export default habitReducer