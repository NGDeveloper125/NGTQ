import { useState } from 'react'
import Heading from './components/Heading'
import Page from './components/Page'
import Footing from './components/Footing'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState("About")
  const pages = ["About", "Task-Queues", "Bus-Services", "Community", "Conteributions"]
  return (
    <div className='app-container'>
      <div className='heading-container'>
        <Heading pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <div className='page-container'>
        <Page currentPage={currentPage}/>
      </div>
      <div className='footing-container'>
        <Footing />
      </div>
    </div>
  )
}

export default App
