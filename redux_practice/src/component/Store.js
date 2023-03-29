import {createStore} from "redux"
import {carReducer} from "./CarReducer"

export const store = createStore(carReducer)