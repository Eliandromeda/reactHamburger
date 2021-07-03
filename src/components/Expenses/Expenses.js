import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
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
        <ExpenseList items={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
