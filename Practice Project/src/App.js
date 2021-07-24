import logo from './logo.svg';
import './App.css';
import './components/User/AddUser'
import AddUser from './components/User/AddUser';
import './index.css';
import UsersList from './components/User/UsersList';
import { useState } from 'react';
function App() {
  const [usersList, addUsersListHandler] = useState([]);

  const usersListHandler = (u_name,u_age)=>{
    console.log(u_name+"   "+u_age);
    addUsersListHandler(prevState => { 
      return [...prevState,{name: u_name, age:u_age , key:Math.random.toString()}]
    });
  }

  return (
    <div className="App">
      <AddUser addToList={usersListHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
