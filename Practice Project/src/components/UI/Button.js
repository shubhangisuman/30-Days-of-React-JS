import react from 'react';
import styles from './Button.module.css';
const Button = (props)=>{
    return(
        <button 
            onClick={props.onClick}
            className={styles.button} 
            type={props.type=="submit" ? "submit" :"button"} 
        >
            {props.children}  
        </button> 
    );
} 
export default Button;

//i know  ek hi mein dono ho sakta hai kya?
//got it hehehehhehehe