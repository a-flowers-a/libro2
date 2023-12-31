import { Unit } from "../../interfaces/unit";

export enum UnitActionName {
  SET_UNIT = "SET_UNIT",
}

export interface UnitActionFunction {
  setUnit: (state: Unit) => void;
}

export interface UnitStateContext {
  state: Unit;
  actions: UnitActionFunction;
}

export interface UnitAction {
  type: UnitActionName;
  payload: Unit;
}
