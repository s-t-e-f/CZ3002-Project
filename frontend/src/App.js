import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import TransactionPage from './pages/TransactionPage';
import TransactionFormPage from './pages/TransactionFormPage';

import { Switch, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getTransactionsAsyn } from "./store/Transaction";
import { useEffect } from "react";


function App() {

  // Retrieve the Transaction data 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionsAsyn())
  }, []); 

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <LoginPage />
        </Route>
        <Route path='/transactionPage' exact>
          <TransactionPage />
        </Route>
        <Route path='/main' exact>
          <MainPage />
        </Route>
        <Route path='/errorPage' exact>
          <ErrorPage />
        </Route>
        <Route path="/transactionPage/transactionForm" exact>
          <TransactionFormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
