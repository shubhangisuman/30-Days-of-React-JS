import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

let NewExpense = (props)=>{
    let saveExpenseDataHandler = (obj)=>{
        let expense = {
            ...obj,
            id: Math.random().toString()
        }
        props.addExpenseData(expense);
    }
    return(
        <div className="new-expense">
            <ExpenseForm saveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;