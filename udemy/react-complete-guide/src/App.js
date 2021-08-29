import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Inssurance', amount: 284.67, date: new Date(2021, 2, 28)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
