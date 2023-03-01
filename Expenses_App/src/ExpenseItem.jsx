import React, { useState } from "react";
import "./css/expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseItem = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Moved to ExpensesList component
  /* let expensesContent = <h1 style={{ color: "white" }}> No expenses.</h1>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((exp) => (
      <div key={exp.title} className="expense-item">
        <ExpenseDate date={exp.date} />
        <div className="expense-item__description">
          <h2>{exp.title}</h2>
          <div className="expense-item__price">{exp.amount}</div>
        </div>
      </div>
    ));
  } */

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList expenses={filteredExpenses} />

      {/*  
      {expensesContent}
      {filteredExpenses.length === 0 ? (
        <h1 style={{ color: "white" }}> No expenses.</h1>
      ) : (
        filteredExpenses.map((exp) => (
          <div key={exp.title} className="expense-item">
            <ExpenseDate date={exp.date} />
            <div className="expense-item__description">
              <h2>{exp.title}</h2>
              <div className="expense-item__price">{exp.amount}</div>
            </div>
          </div>
        ))
      )} */}
    </div>
  );
};

export default ExpenseItem;
