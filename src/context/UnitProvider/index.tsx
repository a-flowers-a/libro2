import { useCallback, useReducer } from "react";
//Context
import { UnitInitialState, CreatedUnitContext } from "./context";
import UnitReducer from "./reducer";
import { UnitActionName } from "./types";
import { Unit } from "../../interfaces/unit";

function UnitProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(UnitReducer, UnitInitialState);

  /**
   * Sets the Unit props
   */
  const setUnit = useCallback((newUnit: Unit) => {
    dispatch({ type: UnitActionName.SET_UNIT, payload: newUnit });
  }, []);

  const providerValue = {
    state: state,
    actions: {
      setUnit,
    },
  };
  return (
    <CreatedUnitContext.Provider value={providerValue}>
      {children}
    </CreatedUnitContext.Provider>
  );
}

export default UnitProvider;
