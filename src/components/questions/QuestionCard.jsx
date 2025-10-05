import React from 'react'
import "./QuestionCard.css"
import Button from '../Button'


const QuestionCard = (props) => {
    const {text, onClick} = props

  return (
    <div className='cardContainer'>
        <Button text={text} onClick={onClick}/>
    </div>
  )
}

export default QuestionCard