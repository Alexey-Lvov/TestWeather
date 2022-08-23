import { createSlice } from '@reduxjs/toolkit';

type WeathersState = {
  isLoading: boolean,
  weather: any,
};

export const initialState: WeathersState = {
  isLoading: false,
  weather: {
    hourly: {
      temperature_2m: [],
      dewpoint_2m: [],
      cloudcover: [],
      windspeed_10m: [],
    },
    hourly_units: {},
  },
};

export const authSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getWeatherStart: (state, action) => {
      state.isLoading = true;
    },
    getWeatherSuccess: (state, action) => {
      state.isLoading = true;
      state.weather = action.payload;
    },
    getWeatherFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getWeatherStart,
  getWeatherSuccess,
  getWeatherFail,
} = authSlice.actions;

export default authSlice.reducer;
