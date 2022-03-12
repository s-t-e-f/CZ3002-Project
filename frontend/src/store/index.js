import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './Authentication';
import TransactionReducer from './Transaction';


const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    transactions: TransactionReducer,
  },
});

export default store;
