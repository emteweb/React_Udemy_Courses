import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./css/expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />

      {expenses.map((exp) => (
        <div key={exp.title} className="expense-item">
          <ExpenseDate date={exp.date} />
          <div className="expense-item__description">
            <h2>{exp.title}</h2>
            <div className="expense-item__price">{exp.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
