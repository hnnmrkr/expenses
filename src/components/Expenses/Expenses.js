import {useState} from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";



function Expenses(props) {
    const [filteredYear,setFilteredyear] = useState('2023')

    console.log('Year data in Expenses.js ' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + ' in Expenses.js')
        setFilteredyear(year)
    }

    props.expenses.map((expense) => {
        console.log(expense)
    })

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}

export default Expenses