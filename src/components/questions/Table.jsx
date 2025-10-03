import React, { useState } from 'react'
import QuestionCard from './QuestionCard'
import QuestionDivider from './QuestionDivider'
import "./Table.css"
import { getData } from '../../data/data'

const Table = () => {
  

  return (
    <div className='table'>
        <QuestionCard />
        <QuestionDivider/>
        <QuestionCard />
    </div>
  )
}

export default Table