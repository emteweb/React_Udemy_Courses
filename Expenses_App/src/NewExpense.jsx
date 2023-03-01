import React, { useState } from "react";
import "./css/newExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdited, setIsEdited] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const handleStartEditing = () => {
    setIsEdited(true);
  };

  const handleStopEditing = () => {
    setIsEdited(false);
  };

  return (
    <div className="new-expense">
      {!isEdited && (
        <button onClick={handleStartEditing}>Add new expense</button>
      )}
      {isEdited && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={handleStopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
