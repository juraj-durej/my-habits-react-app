import { combineReducers } from "redux";
import habitReducer from "./habitReducer"


const reducers = combineReducers({
    bank: habitReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>