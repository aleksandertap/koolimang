import React from 'react'
import Button from '../Button'
import "./MainMenu.css"

const MainMenu = (props) => {
  const { startQuiz } = props;
    
  return (
    <div className='container'>
        <h1 className='title'>VOCONATOR</h1>
        <p className='text'>Vali väide, mis käib sinu kohta ning saa teada, milline valdkond sobib just Sulle!</p>
        <Button className="button" text={"START"} onClick={startQuiz} /> 
    </div>
  )
}

export default MainMenu