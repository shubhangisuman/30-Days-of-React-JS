import { useState } from 'react';
import './ExpenseFilter.css';
function ExpenseFilter(props) {
    let [enteredYear,setYear] = useState();
    let onYearChangeHandler = (e)=>{
        props.dropdownChangeHandler(e.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.enteredYear} onChange={onYearChangeHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    );
}
export default ExpenseFilter;