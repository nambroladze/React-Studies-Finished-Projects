import { useState } from "react";
import Player from "./components/Player";
import WinnerBanner from "./components/WinnerBanner";

function App() {
  const [player1Dice, setPlayer1Dice] = useState(null);
  const [player2Dice, setPlayer2Dice] = useState(null);

  const [players, setPlayers] = useState({
    player1: null,
    player2: null,
  });

  const currentPlayer = players.player1 == null ? 1 : 2;

  const playAgain = () => {
    setPlayers({ player1: null, player2: null });
  };

  const winner = () => {
    if (players.player1 === null || players.player2 === null) {
      return null;
    }

    if (players.player1 > players.player2) {
      return "Player 1";
    } else if (players.player2 > players.player1) {
      return "Player 2";
    } else {
      return "tie";
    }
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      // setPlayer1Dice(randomNumber);
      setPlayers((prev) => ({ ...prev, player1: randomNumber }));
    } else {
      // setPlayer2Dice(randomNumber);
      setPlayers((prev) => ({ ...prev, player2: randomNumber }));
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
      }}
    >
      <h1>🎲 2-Player Dice Game 🎲</h1>

      <p style={{ fontSize: "20px", margin: "20px 0" }}>
        {currentPlayer === 1 ? "Player 1's turn!" : "Player 2's turn!"}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "30px 0",
        }}
      >
        <Player
          title={"Player 1"}
          onClick={rollDice}
          text={"🎲 Roll Dice"}
          disabled={currentPlayer !== 1 || players.player2 !== null}
          dice={player1Dice}
          color={"#4CAF50"}
        />

        <div
          style={{
            fontSize: "40px",
          }}
        >
          VS
        </div>

        <Player
          title={"Player 2"}
          onClick={rollDice}
          text={"🎲 Roll Dice"}
          disabled={currentPlayer !== 2 || players.player2 !== null}
          dice={player2Dice}
          color={"#1E88E5"}
        />
      </div>

      {winner() && <WinnerBanner winner={winner()} onPlayAgain={playAgain} />}
      {/* {winner() ?? "we don't have a winner yet"} */}
    </div>
  );
}

export default App;
