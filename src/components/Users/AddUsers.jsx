import React from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUsers = ({ onAddUser }) => {

  const [enteredAge, setEnteredAge] = React.useState('')
  const [enteredUsername, setEnteredUsername] = React.useState('')
  const [error, setError] = React.useState()

  const addUserHandler = (e) => {
    e.preventDefault()

    if(enteredUsername.trim().length === 0 || enteredAge === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      })
      return
    }
    if(+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
      return
    }

    console.log(enteredUsername, enteredAge)
    onAddUser(enteredUsername, enteredAge)
    setEnteredAge('')
    setEnteredUsername('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }


  const errorHandler = () => {
    setError(null)
  }
  
  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} onConfirm={errorHandler} message={error.message} />}
      <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input 
            id='username' 
            value={enteredUsername} 
            tyoe='text' 
            onChange={usernameChangeHandler} 
          />
          <label htmlFor='age'>Age</label>
          <input 
            id='age' 
            tyoe='number' 
            value={enteredAge} 
            onChange={ageChangeHandler} 
          />
        <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUsers
