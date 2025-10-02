import React from 'react'
import "./QuestionCard.css"

const QuestionCard = (props) => {
    const {text} = props

  return (
    <div className='cardContainer'>
        <p>{text}</p>
    </div>
  )
}

export default QuestionCard