import React from 'react'
import Button from '../Button'
import "./MainMenu.css"

const MainMenu = () => {
    
  return (
    <div className='container'>
        <h1 className='title'>PEALKIRI</h1>
        <p className='text'>Vali väide, mis käib sinu kohta</p>
        <Button className="button" text={"yes"} onClick={() => console.log("hell")}/> 
    </div>
  )
}

export default MainMenu