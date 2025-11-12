import { useState } from "react";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";

function App() {
  const [player1, setPlayer1] = useState({
    dice: null,
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    dice: null,
    score: 0,
  });

  const [rounds, setRounds] = useState(1);

  const currentPlayer = player1.dice === null ? 1 : 2;

  const playNextRound = () => {
    setPlayer1((prev) => ({ ...prev, dice: null }));
    setPlayer2((prev) => ({ ...prev, dice: null }));
    setRounds((prev) => prev + 1);

    if (player1.dice > player2.dice) {
      setPlayer1((prev) => ({ ...prev, score: prev.score + 1 }));
    } else if (player2.dice > player1.dice) {
      setPlayer2((prev) => ({ ...prev, score: prev.score + 1 }));
    }
  };

  const playAgain = () => {
    setPlayer1({ dice: null, score: 0 });
    setPlayer2({ dice: null, score: 0 });
    setRounds(1);
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1((prev) => ({ ...prev, dice: randomNumber }));
    } else {
      setPlayer2((prev) => ({ ...prev, dice: randomNumber }));
    }
  };

  if (rounds > 5) {
    return (
      <GameOverScreen
        onPlayAgain={playAgain}
        player1score={player1.score}
        player2score={player2.score}
        rounds={rounds}
      />
    );
  }

  return (
    <GameScreen
      onPlayNextRound={playNextRound}
      player1dice={player1.dice}
      player2dice={player2.dice}
      rounds={rounds}
      currentPlayer={currentPlayer}
      rollDice={rollDice}
    />
  );
}

export default App;
