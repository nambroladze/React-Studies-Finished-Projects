import Player from "./Player";
import WinnerBanner from "./WinnerBanner";

export default function GameScreen({
  onPlayNextRound,
  player1dice,
  player2dice,
  rounds = 5,
  currentPlayer,
  rollDice,
}) {
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
          dice={player1dice}
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
          disabled={currentPlayer !== 2 || player2dice !== null}
          dice={player2dice}
          color={"#1E88E5"}
        />
      </div>

      <WinnerBanner
        onPlayNextRound={onPlayNextRound}
        player1dice={player1dice}
        player2dice={player2dice}
        rounds={rounds}
      />
    </div>
  );
}
