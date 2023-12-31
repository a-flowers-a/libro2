import { Unit } from "../../interfaces/unit";
import { UnitAction, UnitActionName } from "./types";

export default function AuthReducer(state: Unit, action: UnitAction) {
  if (action.type === UnitActionName.SET_UNIT) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
}
