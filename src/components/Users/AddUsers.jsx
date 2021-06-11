import React from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUsers = ({ onAddUser }) => {

  const nameInputRef = React.useRef()
  const ageInputRef = React.useRef()
  const [error, setError] = React.useState()

  const addUserHandler = (e) => {
    e.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if(enteredName.trim().length === 0 || enteredAge === 0) {
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

    onAddUser(enteredName, enteredAge)
  }

  const errorHandler = () => setError(null)
  
  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} onConfirm={errorHandler} message={error.message} />}
      <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input 
            id='username' 
            tyoe='text' 
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age</label>
          <input 
            id='age' 
            tyoe='number' 
            ref={ageInputRef} 
          />
        <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUsers
