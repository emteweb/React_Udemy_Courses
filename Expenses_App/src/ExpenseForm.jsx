import React, { useState } from "react";
import "./css/expenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* OR 
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const handleTitleInput = (e) => {
    setUserInput({
      ...userInput,     // we use spread operator to extract all 3 properties - enteredTitle,enteredAmount,enteredDate - from the state
      enteredTitle: e.target.value   // and here we override one value
    })
  };
   
  ===>>> BUT to be sure we operate on the latest STATE we should use the following instead:
         We pass a function with prevState to our setProperty function that updates the state

    const handleTitleInput = (e) => {
    setEnteredTitle((prevState) => {
      return {...prevState, enteredTitle: e.target.value}, 
    });
  };



  */

  const handleTitleInput = (e) => {
    setEnteredTitle(e.target.value);
  };
  const handleAmountInput = (e) => {
    setEnteredAmount(e.target.value);
  };
  const handleDateInput = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={enteredTitle} onChange={handleTitleInput} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountInput}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={handleDateInput}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
