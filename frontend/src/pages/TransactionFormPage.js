import { Fragment } from "react";

import MainHeader from "../components/MainHeader";
import TransactionForm from "../components/NewTransaction/TransactionForm";

const TransactionFormPage = () => {
  
  return (
    <Fragment>
      <MainHeader />
      <TransactionForm />
    </Fragment>
  );
};

export default TransactionFormPage;
