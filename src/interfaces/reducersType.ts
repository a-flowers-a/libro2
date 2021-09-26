import { ReducersMapObject } from "redux";
import { Unit } from "./unit";

export interface CombinedReducers{
    unitReducer: ReducersMapObject<{ unitReducer: void; }, any>
}