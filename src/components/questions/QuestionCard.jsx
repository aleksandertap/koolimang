import React from 'react'

const QuestionCard = (props) => {
    const {text} = props

  return (
    <div>
        <p>{text}</p>
    </div>
  )
}

export default QuestionCard