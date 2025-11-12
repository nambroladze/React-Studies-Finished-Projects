export default function GameOverScreen({
  onPlayAgain,
  player1score,
  player2score,
  rounds,
}) {
  const totalTies = rounds - 1 - player1score - player2score;

  let winnerHeader = "it's a tie!";

  if (player1score > player2score) {
    winnerHeader = "Congratulations! Player 1 has won the game!";
  } else if (player2score > player1score) {
    winnerHeader = "Congratulations! Player 2 has won the game!";
  }

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
          onClick={onPlayAgain}
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
              {player1score}
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
              {player2score}
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
