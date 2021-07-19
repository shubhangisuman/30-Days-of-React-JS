import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/Expenses/ExpenseItem';
import './Components/Expenses/Expenses.css';
import NewExpense from './Components/Expenses/NewExpense';
import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';


function App() {
  const DUMMY_EXPENSES = [
    {id:'e1',title:"Car",amount:"2400",date: new Date(2019,1,14)},
    {id:'e2',title:"Table",amount:"12340",date: new Date(2020,2,14)},
    {id:'e3',title:"Laptop",amount:"800",date: new Date(2021,2,14)},
    {id:'e4',title:"Bottle",amount:"230",date: new Date(2021,3,14)},
    {id:'e5',title:"Bag",amount:"1500",date: new Date(2019,4,14)},
  ];
  const [expense,setExpense] = useState(DUMMY_EXPENSES);
  console.log(expense);
  const addExpenseDataHandler = (obj)=>{
    setExpense((prevExpense)=>{
        return [...prevExpense,obj];
    });
  }
  // var rows = [];
  // for(let i=0;i<expenses.length;i++)
  //       rows.push(<Expenses key= {enteredExpenses[i].id} title = {enteredExpenses[i].title} amount={enteredExpenses[i].amount} date={enteredExpenses[i].date}/>);
  return (
    <div className="expenses">
      <NewExpense addExpenseData={addExpenseDataHandler} />
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
