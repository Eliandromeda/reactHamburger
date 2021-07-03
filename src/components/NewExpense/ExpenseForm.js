import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = ({ target }) => {
    setEnteredTitle(target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: target.value,
    // });

    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: target.value}
    // });
  };

  const AmountChangeHandler = ({ target }) => {
    setEnteredAmount(target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: target.value,
    // });

    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: target.value}
    // });
  };

  const dateChangeHandler = ({ target }) => {
    setEnteredDate(target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: target.value,
    // });
    //when you state depends of the previous state, you should not do this like
    //the spread operator form
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: target.value}
    // });
    //If the current state depends of the previous state I should memorize this syntax.
    //the function one, because that prevstate keeps an screenshot of the prevState
  };

  //when you create forms is important to know the two way binding
  //because your are listening the input and also sending a value to that input.
  const submitHandler = (event) => {
    event.preventDefault();
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
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
