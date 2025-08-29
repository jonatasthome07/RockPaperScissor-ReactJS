import { useState } from 'react'
import './App.css'

function App() {
  const choices = ["Rock", "Paper", "Scissor"]
  const wins = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper"
  }

  const [userPoints, setUserPoints] = useState(0)
  const [cpuPoints, setCpuPoints] = useState(0)
  const [gameComment, setComment] = useState("Let's Play!")

  // Função que roda uma rodada completa
  const playRound = (userChoice) => {
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]

    if (userChoice === cpuChoice) {
      setComment(`You choose ${userChoice} and CPU chose ${cpuChoice}. Draw game!`)
    } else if (wins[userChoice] === cpuChoice) {
      setUserPoints(prev => prev + 1)
      setComment(`You choose ${userChoice} and CPU chose ${cpuChoice}. You win!`)
    } else {
      setCpuPoints(prev => prev + 1)
      setComment(`You choose ${userChoice} and CPU chose ${cpuChoice}. You lose!`)
    }
  }

  // Função para resetar o jogo
  const resetGame = () => {
    setUserPoints(0)
    setCpuPoints(0)
    setComment("Let's Play!")
  }

  return (
    <div className="main-container">
      <h1>Rock, Paper and Scissor</h1>
      <h2>Your points: {userPoints}</h2>
      <h2>CPU points: {cpuPoints}</h2>
      <h3>{gameComment}</h3>

      <div className="actions">
        <button onClick={() => playRound("Rock")}>Rock</button>
        <button onClick={() => playRound("Paper")}>Paper</button>
        <button onClick={() => playRound("Scissor")}>Scissor</button>
        <button onClick={resetGame}>Reset game</button>
      </div>
    </div>
  )
}

export default App