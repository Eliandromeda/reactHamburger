import React, { useState } from 'react';// use state allows us to define values as state, it is a hook from
// and let us observe the prop or variable state.
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const  ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);// it is a function that returns an array with value and a function,

  const clickHandler = () => {
    setTitle('updated!!'); // you are telling react that you want to assign this new value to the props.title
    //then it evaluates all the changes by checking even the jsx code.
    console.log(title);// this is not be reflecting right away because it schedule that change, by evaluating again the component where the change was made.

    // use of useState if you have data witch may change and the changes
    // should be reflected by the user interface because regular variables will not do the trick
  }
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;

//Every time you call or reuse this component, for example in Expenses that we are calling it four times,
// it means that the useState it is independent for each one, so it like declare useState for times and 
// independent instance is created.

///So if you run the example and click in one element on the list you will realized that only one of the elements 
//were affected, so it only changes the title of the current clicked element, because it has its own state separate states.

//Only that instance will be reevaluated
// The useState is create once just when it is used by the first time then if you use it again it will take,
// the last changes and not more.