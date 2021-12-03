import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Inssurance", amount: 284.67, date: new Date(2021, 2, 28) },
    { title: "Alien Farm", amount: 2.14, date: new Date(2021, 3, 22) },
    { title: "Car Bed", amount: 27.11, date: new Date(2021, 9, 16) },
    { title: "Baer Inssurance", amount: 287, date: new Date(2021, 13, 11) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
