import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";

import "./TransactionItem.css";

const TransactionItem = (props) => {

  const history = useHistory();
  const editTransactionHandler = () => {
    history.push({
      pathname: "transactionForm",
      state: {
        type: props.type,
        date: props.date,
        category: props.category,
        amount: props.amount,
        description: props.description,
        action: "edit"
      },
    });
  };

  return (
    <button className="transaction-item" onClick={editTransactionHandler}>
      <h4 className="transaction-item__category">{props.category}</h4>
      <h4 className="transaction-item__description">{props.description}</h4>
      <NumberFormat
        className={
          props.type === "income"
            ? "transaction-item__income"
            : "transaction-item__expense"
        }
        value={props.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
        fixedDecimalScale={true}
      />
    </button>
  );
};

export default TransactionItem;
