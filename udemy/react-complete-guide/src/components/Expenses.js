function Expenses(props) {

  return (
    <div className="expenses">
      title={props.title}
      amount={props.amount}
      date={props.date}
    </div>
  );
}

export default Expenses;