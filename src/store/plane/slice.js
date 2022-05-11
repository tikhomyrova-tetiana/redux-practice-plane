import { createSlice } from "@reduxjs/toolkit";

const status = ["manual", "autopilot", "controlled-remotely"];

const initialState = {
  engines: {
    left: false,
    left_center: false,
    right_center: false,
    right: false,
  },
  navigation: status[0],
  thrust: 0,
  totalPower: 0,
};

export const plane = createSlice({
  name: "plane",
  initialState,
  reducers: {
    switchEngine: (state, action) => {
      // if we pass a string in payload [] will transform it
      // state.engines["left"] = !state.engines["left"]; передаем ключ объекта
      state.engines[action.payload] = !state.engines[action.payload];
    },
    changeNavigation: (state, action) => {
      state.navigation = status[action.payload];
    },
  },
});

export const { switchEngine, changeNavigation } = plane.actions;

export default plane.reducer;
