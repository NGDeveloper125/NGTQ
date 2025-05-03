import { useState } from 'react'
import Heading from './components/Heading'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading />
      <Page />
      <Footing />
    </>
  )
}

export default App
