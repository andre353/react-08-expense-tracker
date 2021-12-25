import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext);

  // an array of all amounts
  const amounts = transactions.map(transaction => transaction.amount);

  // filter and sup up all positive numbers
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  // filter and sum up all negative numbers
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">
            -${expense}
          </p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
