import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import TransactionForm from "../components/NewTransaction/TransactionForm";

const TransactionFormPage = () => {
  const location = useLocation();

  return (
    <Fragment>
      <MainHeader />
      {location.state.action === "add" ? (
        <h1 className="new-transaction__h1">Add Transaction</h1>
      ) : (
        <h1 className="new-transaction__h1">Edit Transaction</h1>
      )}
      <TransactionForm
        type={location.state.type}
        date={location.state.date}
        category={location.state.category}
        amount={location.state.amount}
        description={location.state.description}
      />
    </Fragment>
  );
};

export default TransactionFormPage;
