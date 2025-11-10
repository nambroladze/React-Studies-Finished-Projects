import { useState } from "react";
import Player from "./components/Player";
import WinnerBanner from "./components/WinnerBanner";

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

  const winner = () => {
    if (player1.dice === null || player2.dice === null) {
      return null;
    }

    if (player1.dice > player2.dice) {
      return "Player 1";
    } else if (player2.dice > player1.dice) {
      return "Player 2";
    } else {
      return "tie";
    }
  };

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

  let winnerHeader = "it's a tie!";

  if (player1.score > player2.score) {
    winnerHeader = "Congratulations! Player 1 has won the game!";
  } else if (player2.score > player1.score) {
    winnerHeader = "Congratulations! Player 2 has won the game!";
  }

  if (rounds > 5) {
    const totalTies = rounds - 1 - player1.score - player2.score;

    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px 0",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd 0%, #c8e6c9 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "24px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
            padding: "48px 60px",
            maxWidth: "460px",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              margin: "0 0 20px 0",
              fontWeight: "bold",
              color: "#333",
              letterSpacing: "1px",
              textShadow: "0 2px 10px rgba(76,175,80,0.08)",
            }}
          >
            {winnerHeader}
          </h1>
          <button
            onClick={playAgain}
            style={{
              marginTop: "18px",
              padding: "16px 40px",
              fontSize: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 18px rgba(33, 150, 243, 0.13)",
              letterSpacing: "2px",
            }}
          >
            🎲 Play Again
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              alignItems: "center",
              marginTop: "38px",
              marginBottom: "8px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#4CAF50",
                  fontSize: "1.15rem",
                }}
              >
                Player 1 Wins:
              </span>
              <div
                style={{ marginTop: "10px", fontSize: "1.6rem", color: "#222" }}
              >
                {player1.score}
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#1E88E5",
                  fontSize: "1.15rem",
                }}
              >
                Player 2 Wins:
              </span>
              <div
                style={{ marginTop: "10px", fontSize: "1.6rem", color: "#222" }}
              >
                {player2.score}
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#FFA500",
                  fontSize: "1.15rem",
                }}
              >
                Ties:
              </span>
              <div
                style={{ marginTop: "10px", fontSize: "1.6rem", color: "#222" }}
              >
                {totalTies}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          disabled={currentPlayer !== 1}
          dice={player1.dice}
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
          disabled={currentPlayer !== 2 || player2.dice !== null}
          dice={player2.dice}
          color={"#1E88E5"}
        />
      </div>

      {winner() && (
        <WinnerBanner
          onPlayNextRound={playNextRound}
          winner={winner()}
          rounds={rounds}
        />
      )}
    </div>
  );
}

export default App;
