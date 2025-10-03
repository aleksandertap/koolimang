import './App.css'
import { getData } from './data/data'
import MainMenu from './components/menus/MainMenu'
import QuestionDivider from './components/questions/QuestionDivider'
import Table from './components/questions/Table'

function App() {
  const data = getData()

  return (
    
      <div className='mainContainer'>
        <Table></Table>
      </div>
    
  )
}

export default App
