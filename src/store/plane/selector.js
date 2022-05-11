export const allEngines = (reduxState) => reduxState.planeReducer.engines;

export const selectThrust = (reduxState) => reduxState.planeReducer.thrust;

export const selectStatus = (reduxState) => reduxState.planeReducer.navigation;

export const selectTotalPower = (reduxState) =>
  reduxState.planeReducer.totalPower;
