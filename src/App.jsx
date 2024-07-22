import { useState } from "react"
import Player from "./components/Player"
function App() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={player1} symbol="X" saveName={setPlayer1} />
          <Player name={player2} symbol="O" saveName={setPlayer2} />

        </ol>

      </div>
    </main>
  )
}

export default App
