import { CardActionArea } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const transactionInitialState = {
  transactions: [],
};

// Action
export const getTransactionsAsyn = createAsyncThunk(
  "transactions/getTransactionsAsyn",
  async () => {
    const resp = await fetch("http://172.21.148.163/api/v1/transaction", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });

    if (resp.ok) {
      const transactions = await resp.json();
      return { transactions };
    }
  }
);

export const addTransactionAsyn = createAsyncThunk(
  "transactions/addTransactionAsyn",
  async (transaction) => {
    var data = JSON.stringify({
      description: transaction.description,
      type: transaction.type,
      category: transaction.category,
      amount: parseFloat(transaction.amount),
      currency: "SGD",
    });
    const axios = require("axios");
    console.log(data);
    axios
      .post("http://172.21.148.163/api/v1/transaction", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      })
      .then((res) => {
        const newTransaction = res.data;
        return { payload: newTransaction };
      })
      .catch((err) => console.log(err));
  }
);

// Reducer
export const TransactionSlice = createSlice({
  name: "transactions",
  initialState: transactionInitialState,
  reducers: {
  },
  extraReducers: {
    [getTransactionsAsyn.fulfilled]: (state, action) => {
      return action.payload.transactions;
    },
    [addTransactionAsyn.fulfilled]: (state, action) => {
      state.push(action.payload.newTransaction);
    },
  },
});

export const TransactionActions = TransactionSlice.actions;
export default TransactionSlice.reducer;
