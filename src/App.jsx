import { useState } from 'react'
import './App.css'

function App() {
  
  const [rock, setRock] = useState()
  const [paper, setPaper] = useState()
  const [scissor, setScissor] = useState()
  const [userPoints, setUserPoints] = useState(0)
  const [cpuPoints, setCpuPoints] = useState(0)
  const [match, setMatch] = useState()

  return (
    <>
      <div className="main-container">
        <h1>Rock, Paper and Scissor</h1>
        <h2>Your points: {userPoints}</h2>
        <h2>CPU points: {cpuPoints}</h2>

      <div className="actions">
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissor</button>
        <button>Reset game</button>
      </div>
        
      </div>
    </>
  )
}

export default App
