import { createContext, useContext } from "react";
//Types & Consts
import { UnitStateContext } from "./types";
import { Unit } from "../../interfaces/unit";
import unitOne from "../../constants/unitOne";

const UnitInitialState: Unit = unitOne;

const CreatedUnitContext = createContext<UnitStateContext>({
  state: UnitInitialState,
  actions: {
    setUnit(state) {
      /** */
    },
  },
});

const UnitContext = () => useContext(CreatedUnitContext);

export { UnitInitialState, CreatedUnitContext, UnitContext };
