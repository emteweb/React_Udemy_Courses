import React, {useState} from 'react';
import './App.css';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge)=> {
    setUsersList((prevState) => {
      console.log("PrevState: ",prevState);
      return [...prevState, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      {usersList && <UsersList users={usersList}/>}
    </div>
  );
}

export default App;
