import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log("new:",expenseDate);
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
