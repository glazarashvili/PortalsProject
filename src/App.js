import React from 'react';

import AddUser from './components/Users/AddUsers'
import UsersList from './components/Users/UsersList'

const App = () => {

  const [usersList, setUsersList] = React.useState([])

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, 
        {name: userName, 
         age: userAge, 
         id: Math.random().toString()
        }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App
