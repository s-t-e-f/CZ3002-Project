import "./Transaction.css";
import TransactionItem from "./TransactionItem";
import * as utils from "./Util";

import NumberFormat from "react-number-format";

const TransactionDay = (props) => {
  
  // Get all the transactions for that day
  const transactionList = utils.transactionsInDate(
    props.transactions,
    props.date
  );

  switch (transactionList.length > 0) {
    case true:
      return (
        <div className="transaction__container">
          <div className="transaction__control">
            <h3 className="transaction__date">{props.date.toDateString()}</h3>

            <h3 className="transaction__overallIncome">
              <NumberFormat
                value={utils.getOverall(transactionList, "income")}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </h3>
            <h3 className="transaction__overallExpense">
              <NumberFormat
                value={utils.getOverall(transactionList, "expense")}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </h3>
          </div>
          <div className="transaction-list">
            {transactionList.map((transaction) => (
              <TransactionItem
                key={transaction.transaction_key}
                date={new Date(transaction.date_of_transaction)}
                category={transaction.category}
                description={transaction.description}
                amount={transaction.amount.$numberDecimal}
                type={transaction.type}
              ></TransactionItem>
            ))}
          </div>
        </div>
      );
    case false:
      return null;
    default:
      return null;
  }
};

export default TransactionDay;
