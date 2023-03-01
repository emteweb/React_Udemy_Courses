import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./css/expensesList.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found!</h2>;
  }
  return (
    <ul className="expenses-list">
      <li>
        {expenses.map((exp) => (
          <div key={exp.title} className="expense-item">
            <ExpenseDate date={exp.date} />
            <div className="expense-item__description">
              <h2>{exp.title}</h2>
              <div className="expense-item__price">{exp.amount}</div>
            </div>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default ExpensesList;
