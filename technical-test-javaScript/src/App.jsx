import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ClosedPaths from './pages/closedPaths/closedPaths'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ClosedPaths/>
    </>
  )
}

export default App
