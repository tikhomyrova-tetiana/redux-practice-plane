export const allEngines = (reduxState) => reduxState.planeReducer.engines;

export const selectThrust = (reduxState) => reduxState.planeReducer.thrust;

export const selectStatus = (reduxState) => reduxState.planeReducer.navigation;

export const selectTotalPower = (reduxState) => {
  const { engines, thrust } = reduxState.planeReducer;

  const enginesStatus = Object.values(engines);
  //   console.log({ enginesStatus });
  //   !!чтобы увидеть консоль нужно активировать этот селектор в компоненте, через useSelector
  //   B сначала нужно написать чисто эти переменные чтоб проверить массив и редьюс с ним, а потом выполнять дальше действия с ними
  const workedEnginesNumber = enginesStatus.reduce(
    (previousValue, currentValue) => previousValue + (currentValue ? 1 : 0),
    0
  );
  //   console.log(workedEnginesNumber);
  return workedEnginesNumber * thrust;
};
