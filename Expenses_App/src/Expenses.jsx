import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./css/expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <div>
      <ExpenseItem expenses={expenses} />
    </div>
  );
};

export default Expenses;
