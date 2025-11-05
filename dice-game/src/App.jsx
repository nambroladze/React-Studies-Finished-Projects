import { useState } from "react";
import DiceBasic from "./components/DiceGamePlayers";
import WinnerBanner from "./components/WinnerBanner";

function App() {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) 
      {
      setPlayer1(randomNum);
      setCurrentPlayer(2);
    } else {
      setPlayer2(randomNum);
      setCurrentPlayer(1);
    }
  };

  const getWinner = () => 
    {
    if (player1 === null || player2 === null) return "";
    if (player1 > player2) return "🎉 Player 1 Wins!";
    if (player2 > player1) return "🏆 Player 2 Wins!";
    return "🤝 It's a Tie!";
  };

  const resetGame = () => {
    setPlayer1(null);
    setPlayer2(null);
    setCurrentPlayer(1);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Dice Game 🎲</h1>

      <DiceBasic
        title="Player 1"
        dice={player1 !== null ? diceEmojis[player1 - 1] : "?"}
        handleClick={rollDice}
        isDisabled={currentPlayer === 2}
      />

      <div style={{ fontSize: "24px", margin: "10px" }}>VS</div>

      <DiceBasic
        title="Player 2"
        dice={player2 !== null ? diceEmojis[player2 - 1] : "?"}
        handleClick={rollDice}
        isDisabled={currentPlayer === 1}
      />

      <WinnerBanner winnerText={getWinner()} onReset={resetGame} />
    </div>
  );
}



export default App;
