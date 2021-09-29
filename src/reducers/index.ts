import { combineReducers } from 'redux'
import { CombinedReducers } from '../interfaces/reducersType';
import unitReducer from './unitReducer'

// const combinedReducers: CombinedReducers = {unitReducer: unitReducer};
const allReducers = combineReducers({unitReducer: unitReducer} );

export default allReducers;