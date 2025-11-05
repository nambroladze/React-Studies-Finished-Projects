const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const baseStyle = {
  margin: "10px",
  padding: "15px 30px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
};

const disabledStyle = {
  backgroundColor: "#9e9e9e",
  cursor: "not-allowed",
  opacity: 0.6,
};

export default function Player({
  title,
  onClick,
  text,
  disabled,
  dice,
  color,
}) {
  const style = disabled
    ? { ...baseStyle, ...disabledStyle }
    : { ...baseStyle, backgroundColor: color };
  const diceEmoji = dice === null ? diceEmojis[0] : diceEmojis[dice - 1];

  return (
    <div>
      <h3>{title}</h3>
      <div style={{ fontSize: "60px" }}>{diceEmoji}</div>
      <button onClick={onClick} style={style} disabled={disabled}>
        {text || "🎲 Roll Dice"}
      </button>
    </div>
  );
}
