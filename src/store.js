import { configureStore, createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'en', // Default language
  reducers: {
    setLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

const rootReducer = {
  language: languageSlice.reducer,
  // Other reducers go here if needed
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
