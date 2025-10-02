import React from 'react'
import QuestionCard from './QuestionCard'
import QuestionDivider from './QuestionDivider'
import "./Table.css"

const Table = () => {
  return (
    <div className='table'>
        <QuestionCard text={"this is card 1 text"}/>
        <QuestionDivider/>
        <QuestionCard text={"this is card 2 text"}/>
    </div>
  )
}

export default Table