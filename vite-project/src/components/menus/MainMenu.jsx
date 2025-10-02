import React from 'react'
import Button from '../Button'
import "./MainMenu.css"

const MainMenu = () => {
    
  return (
    <div className='container'>
        <h1 className='title'>HEllo</h1>
        <p className='text'>text</p>
        <Button className="button" text={"yes"} onClick={() => console.log("hell")}/> 
    </div>
  )
}

export default MainMenu