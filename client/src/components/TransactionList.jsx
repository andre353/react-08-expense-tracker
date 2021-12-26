import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  // we can pull out anything from our context using the useContext hook
  //const context = useContext(GlobalContext); // GlobalContext = createContext(dispatch(initialState))
  // we can profit from array distructuring rather than to write context.transactions
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id}/>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
