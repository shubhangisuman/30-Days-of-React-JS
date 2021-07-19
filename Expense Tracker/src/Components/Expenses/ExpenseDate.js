import './ExpenseDate.css';
function ExpenseDate(props) {
    let date = new Date(props.date);
    console.log(date);
    return (
        <div className="expense-date">
            <div className="expense-date__month">{date.toLocaleString('en-US', { month: 'long' })}</div>
            <div className="expense-date__day">{date.toLocaleString('en-US', { day: '2-digit' })}</div>
            <div className="expense-date__year">{date.getFullYear()}</div>
        </div>
    );
}
export default ExpenseDate;