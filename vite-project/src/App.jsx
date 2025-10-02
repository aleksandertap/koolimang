import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData } from './data/data'
import MainMenu from './components/menus/MainMenu'

function App() {
  const data = getData()

  return (
    <>
      <MainMenu></MainMenu>
    </>
  )
}

export default App
