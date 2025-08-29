import { useState, useEffect, use } from 'react'
import './App.css'

function App() {
  
  let [userChoice, setUserChoice] = useState("")
  let [cpuChoice, setCpuChoice] = useState("")
  let [userPoints, setUserPoints] = useState(0)
  let [cpuPoints, setCpuPoints] = useState(0)
  
  const choices = ["Rock", "Paper", "Scissor"]
  
  useEffect(()=>{
    setCpuChoice(choices[Math.floor(Math.random() * choices.length)])
    if (userChoice === choices[0] && cpuChoice === choices[2]){
      setUserPoints(prev => prev + 1)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }
    if (userChoice === choices[0] && cpuChoice === choices[1]){
      setCpuPoints(prev => prev + 1)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }
    if (userChoice === choices[1] && cpuChoice === choices[2]){
      setCpuPoints(prev => prev + 1)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }

    if (userChoice === choices[1] && cpuChoice === choices[0]){
      setCpuPoints(prev => prev + 1)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }

    if (userChoice === choices[2] && cpuChoice === choices[1]){
      setUserPoints(prev => prev + 1)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }
    if (userChoice === choices[2] && cpuChoice === choices[0]){
      setCpuPoints(prev => prev + 1)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }

    if (userChoice === choices[0] && cpuChoice === choices [0]) {
      setUserPoints(prev => prev + 0)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }

    if (userChoice === choices[1] && cpuChoice === choices [1]) {
      setUserPoints(prev => prev + 0)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }

    if (userChoice === choices[2] && cpuChoice === choices [2]) {
      setUserPoints(prev => prev + 0)
      setUserChoice(userChoice)
      setCpuChoice(cpuChoice)
    }
  }, [userChoice])
  
  return (
    <>
      <div className="main-container">
        <h1>Rock, Paper and Scissor</h1>
        <h2>Your points: {userPoints}</h2>
        <h2>CPU points: {cpuPoints}</h2>
        <h3>You choose {userChoice} and CPU choose {cpuChoice}!</h3>

      <div className="actions">
        <button onClick={()=> setUserChoice(choices[0])}>Rock</button>
        <button onClick={()=> setUserChoice(choices[1])}>Paper</button>
        <button onClick={()=> setUserChoice(choices[2])}>Scissor</button>
        <button>Reset game</button>
      </div>
        
      </div>
    </>
  )
}

export default App
