import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData } from './data/data'

function App() {
  const data = getData()

  return (
    <>
      {data.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </>
  )
}

export default App
