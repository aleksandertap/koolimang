import { useState } from 'react'
import './App.css'
import { getData } from './data/data'
import MainMenu from './components/menus/MainMenu'
import QuestionDivider from './components/questions/QuestionDivider'
import Table from './components/questions/Table'

function App() {
  const data = getData()

  return (
    <>
      <MainMenu></MainMenu>
      <Table/>
    </>
  )
}

export default App
