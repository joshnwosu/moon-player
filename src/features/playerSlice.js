import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  music: [],
  playList: [],
  nowPlaying: '',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    logAppName() {
      console.log('Moon Player');
    },
  },
});

export const { logAppName } = playerSlice.actions;

export default playerSlice.reducer;
