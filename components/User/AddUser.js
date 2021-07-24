import react, { useState } from 'react';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
// import styles from '../UI/Button.module.css';
import Button from '../UI/Button.js';
import './UsersList';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props)=>{
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState();

    const nameChangeHandler = (e)=>{
        setEnteredName(e.target.value);
    }

    const ageChangeHandler = (e)=>{
        setEnteredAge(e.target.value);
    }

    const addUserHandler = (e)=>{ 
        e.preventDefault();
        if(enteredName.trim().length==0 || enteredAge.trim().length==0){
            setError({
                title:"Invalid input",
                message: "Please set a valid name/age that is a non-empty value!"
            })
            return;
        }
        if(+enteredAge<1){ //+ converts age to number
            setError({
                title:"Invalid age",
                message: "Please set a valid age i.e >1 !"
            })
            return;
        }
        // console.log("Submit "+enteredName);
        // console.log("Submit "+enteredAge);  
        props.addToList(enteredName,enteredAge);
        setEnteredName("");//value attribute in name is responsible to set the name back to empty
        setEnteredAge("");
    }
    
    const onClick = (e)=>{
        console.log(enteredName);
        console.log(enteredAge);
    }

    const errorHandler =() =>{
        setError(null);
    }

    return(
        <Card className = {classes.input}>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <form onSubmit={addUserHandler}>
            {/* <Button onClick={onClick}>Submit 1</Button> */}
            <label htmlFor="user_name">Name</label>
            <input id="user_name" type="text" onChange={nameChangeHandler} value={enteredName}></input>
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input> 
            <Button type="submit">Submit</Button> {/* //This button is responsible for submitting */}
        </form> 
        </Card>
    );
} 
export default AddUser;
