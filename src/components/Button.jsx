import React from 'react'
import "./Button.css"

const Button = (props) => {

const {text, onClick, className} = props
  return (
    <button onClick={onClick} className={className}>
        {text}
    </button>
  )
}

export default Button