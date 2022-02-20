import { useEffect, useState } from "react";

//UI
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import * as utils from "./Util";
import TransactionDay from "./TransactionDay";
import "./Transaction.css";

const Transaction = (props) => {
  let today = new Date();

  const [mth, setMth] = useState(
    today.toLocaleString("default", { month: "long" })
  );
  const [year, setYear] = useState(today.getFullYear());

  const [allDates, setAllDates] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactions = utils.transactionsMthYr(props.data, mth, year);
    const dates = utils.getDates(mth, year);
    setAllDates(dates);
    setTransactions(transactions);
  }, [mth, year, props.data, setTransactions]);
  
  const leftArrowHandler = () => {
    let d = new Date(mth +" 1, " + year.toString());
    d.setMonth(d.getMonth()-1);
    setMth(d.toLocaleString("default", {month:"long"}))
    console.log(d);
    setYear(d.getFullYear());
  }

  const rightArrowHandler = () => {
    let d = new Date(mth +" 1, " + year.toString());
    d.setMonth(d.getMonth()+1);
    setMth(d.toLocaleString("default", {month:"long"}))
    setYear(d.getFullYear());
  }

  return (
    <div className="transaction">
      <h1>{mth + "-" + year}</h1>
      <IconButton onClick={leftArrowHandler}>
        <ArrowBackIosIcon sx={{ fontSize: 50 }} />
      </IconButton>
      <IconButton onClick={rightArrowHandler}>
        <ArrowForwardIosIcon sx={{ fontSize: 50 }}/>
      </IconButton>

      {allDates.map((date) => (
        <TransactionDay data={transactions} date={date}></TransactionDay>
      ))}
    </div>
  );
};

export default Transaction;
