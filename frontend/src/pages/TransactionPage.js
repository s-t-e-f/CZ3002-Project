import { Fragment } from "react";
import { useHistory } from "react-router-dom";

// For UI
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Transaction from "../components/Transaction/Transaction";

const TransactionPage = () => {

  const history = useHistory();

  const addTransactionButtonHandler = (transaction) => {
    history.push({
      pathname: "transactionPage/transactionForm",
      state: {
        type: "income",
        date: new Date(),
        category: "",
        amount: "",
        description: "",
        action: "add",
      },
    });
  };

  return (
    <Fragment>
      <IconButton onClick={addTransactionButtonHandler} sx={{ "&:hover": {color: "gray"}}}>
        <AddCircleIcon
          sx={{ fontSize: 50 }}
          style={{ position: "fixed", bottom: 50, right: 50 }}
        />
      </IconButton>
      <Transaction></Transaction>
    </Fragment>
  );
};

export default TransactionPage;
