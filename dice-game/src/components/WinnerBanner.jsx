export default function WinnerBanner({ onPlayNextRound, winner, rounds = 5 }) {
  const color = () => {
    if (winner === "tie") {
      return "#FFA500";
    } else if (winner === "Player 1") {
      return "#4CAF50";
    } else {
      return "#1E88E5";
    }
  };

  return (
    <div
      style={{
        backgroundColor: color(),
        color: "white",
        padding: "40px 60px",
        borderRadius: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        zIndex: 1000,
        textAlign: "center",
        minWidth: "300px",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "1px",
          textTransform: "uppercase",
          opacity: 1,
          margin: "0 0 6px 0",
        }}
      >
        "Winner of the round {rounds}"
      </div>
      <h2 style={{ margin: "0 0 20px 0", fontSize: "36px" }}>{winner}</h2>

      <button
        onClick={onPlayNextRound}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "white",
          color: color(),
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🎲 Play Again
      </button>
    </div>
  );
}
