import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: auth,
});

export default rootReducer;
