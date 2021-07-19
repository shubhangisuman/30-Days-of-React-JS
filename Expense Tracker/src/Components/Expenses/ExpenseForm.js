import { useState } from "react";
import "./ExpenseForm.css";
import ExpenseFilter from "./ExpenseFilter";
function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    let titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log(enteredTitle);
        // e.preventDefault();       //prevent refresh of browser window on click
    }
    let amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    let dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    let submitHandler = (e)=>{
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseData);
        e.preventDefault();
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        props.saveExpenseData(expenseData);
    }

    return (
        <form id="myForm" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    >
                    </input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    >
                    </input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    >
                    </input>
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;