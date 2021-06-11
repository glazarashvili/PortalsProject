import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm} />
}

const ModalOverlay = ({ onConfirm, title, message }) => {
  return <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{title}</h2>
    </header>
    <div className={classes.content}>
      <p>{message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={onConfirm}>Ok</Button>
    </footer>
  </Card> 
}

const Error = ({ title, message, onConfirm }) => (
  <React.Fragment>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={onConfirm} />, 
      document.getElementById('backdrop-root')
      )}
    {ReactDOM.createPortal(
      <ModalOverlay title={title} message={message} onConfirm={onConfirm} />, 
      document.getElementById('overlay-root')
      )}
  </React.Fragment>
)

export default Error
