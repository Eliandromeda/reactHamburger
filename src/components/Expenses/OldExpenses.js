import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedDate, setDate] = useState("");

  const updateValue = (date) => {
    setDate(date);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedDate;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedDate} onSelectOption={updateValue} />
        {/* {filterExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* you can organize your code with a simple thernary validation */}
        {filterExpenses.length === 0 && <p>No expenses found</p>}
        {/* {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* THE MAP STATEMENT LETS ITERATE OVER EVERY ELEMENT IN THE OBJECT SO IT IS DYNAMIC RIGHT NOW */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
