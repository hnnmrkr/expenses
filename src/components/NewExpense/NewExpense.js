import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formEdit, setFormEdit] = useState(false);

    const formEditHandler = () => {
        setFormEdit(!formEdit)
    }

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    if (formEdit) {
        return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onSumbission={formEditHandler}></ExpenseForm>
        </div>
        )
    } else {
        return (
            <div className='new-expense'>
                <button onClick={formEditHandler}>Add New Expense</button>
            </div>
        )
    }
}

export default NewExpense