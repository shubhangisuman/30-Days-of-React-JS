import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseChart from '../Chart/ExpenseChart';
let Expenses = (props)=>{
    console.log("Expenses   "+props.items);
    const [selectedYear, setSelectedYear] = useState("2020");
    const dropdownChangeHandler = (year)=>{
        setSelectedYear(year);
    }
    const data = [];
    const rows = props.items.map((expenses)=>{
        return expenses.date.getFullYear().toString() === selectedYear && data.push(expenses);
    });
    console.log("Shubhangi  "+data+"       "+typeof data);
    return (
        <div>
            <ExpenseFilter enteredYear={selectedYear} dropdownChangeHandler={dropdownChangeHandler}/>
            <ExpenseChart filteredExpenses={data}/>
            {
            data.map((expenses)=>{
                return <ExpenseItem key={expenses.id} title={expenses.title} date={expenses.date} amount={expenses.amount}/>;
            })
            }
        </div>

    );
}
export default Expenses;