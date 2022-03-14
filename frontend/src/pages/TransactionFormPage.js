import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import TransactionForm from "../components/NewTransaction/TransactionForm";

const TransactionFormPage = () => {
  const location = useLocation();


  return (
    <Fragment>
      <TransactionForm
        type={location.state.type}
        date={location.state.date}
        category={location.state.category}
        amount={location.state.amount}
        description={location.state.description}
        action={location.state.action} 
      />
    </Fragment>
  );
};

export default TransactionFormPage;
