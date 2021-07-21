import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook';
import { authReducer } from './auth';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
