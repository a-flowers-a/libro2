import { Unit } from '../interfaces/unit'
import { unitOne } from '../constants/unitOne'
import {ActionTypes} from '../interfaces/actionTypes'

const initialState: Unit = unitOne;


const unitReducer = (state = initialState, action: any) => {
    if (action.type === ActionTypes.SET_UNIT) {
        return action.payload;
    } else {
        return state;
    }
};

export default unitReducer;
