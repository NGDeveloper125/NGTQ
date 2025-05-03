import { useState } from 'react'
import Heading from './components/Heading'
import Page from './components/Page'
import Footing from './components/Footing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const pages = ["About", "Task-Queues", "Bus-Services", "Community", "Conterbiutions"]
  return (
    <div className='app-container'>
      <div className='heading-container'>
        <Heading pages={pages} currentPage='About' />
      </div>
      <div className='page-container'>
        <Page />
      </div>
      <div className='footing-container'>
        <Footing />
      </div>
    </div>
  )
}

export default App
