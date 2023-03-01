import React, {useState} from 'react';
import Expenses from "./Expenses";
import NewExpense from "./NewExpense";

function App() {

    const dummy_expenses = [
    {
      id: 0,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 1, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 2,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 3,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);
  
  const handleAddExpense = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  }
  return (
    <>
    <NewExpense onAddExpense={handleAddExpense}/>
    <Expenses expenses={expenses} />
    </>
  );
}

export default App;
