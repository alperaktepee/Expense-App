import React, { useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
   const EditingHandler=()=>{
     setIsEditing(true);
   }
   const StopEditingHandler=()=>{
     setIsEditing(false);
   }
    
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={EditingHandler}>Add Expense</button>}
      
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={StopEditingHandler}
    />}
  </div>
  )
}

export default NewExpense;