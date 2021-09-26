import { Unit } from "../interfaces/unit";
import { ActionTypes } from '../interfaces/actionTypes'

export const setUnit = (unit: Unit) => {
    return {
        type: ActionTypes.SET_UNIT,
        payload: unit
    }
}