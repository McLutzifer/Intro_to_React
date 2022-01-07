import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Car Inssurance", amount: 284.67, date: new Date(2021, 2, 28) },
    { title: "Alien Farm", amount: 2.14, date: new Date(2021, 3, 22) },
    { title: "Car Bed", amount: 27.11, date: new Date(2021, 9, 16) },
    { title: "Baer Inssurance", amount: 287, date: new Date(2021, 13, 11) },
  ];

  const addExpenseHandler =(expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}


export default App;
