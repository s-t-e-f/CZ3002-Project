import axios from "axios";
import { useState, Fragment, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// For UI
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import MainHeader from "../components/MainHeader";
import Transaction from "../components/Transaction/Transaction";


const TransactionPage = () => {

  const history = useHistory();
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    axios
      .get("./transaction_dummy.json")
      .then((res) => {
        setTransactionData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addTransactionHandler = (transaction) => {
    setTransactionData([transaction, ...transactionData]);
  };

  const addTransactionButtonHandler = () => {
    history.push({
      pathname: "transactionForm",
      state: {
        type: "income",
        date: new Date(),
        category: "",
        amount: "",
        description:"",
        action:"add"
      },
    });
  };


  return (
    <Fragment>
      <MainHeader />
      <IconButton onClick={addTransactionButtonHandler}>
        <AddCircleIcon
          sx={{ fontSize: 50 }}
          style={{ position: "fixed", bottom: 50, right: 50 }}
        />
      </IconButton>
      <Transaction data={transactionData}></Transaction>
    </Fragment>
  );
};

export default TransactionPage;
