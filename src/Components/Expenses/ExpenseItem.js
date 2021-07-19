import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
function ExpenseItem(props) {
    let title = props.title;
    let date = props.date;
    let amount = props.amount;
    console.log(title+"    "+date+"   "+amount);
    return (
        <Card className="expense-item">
            <ExpenseDate date = {date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;