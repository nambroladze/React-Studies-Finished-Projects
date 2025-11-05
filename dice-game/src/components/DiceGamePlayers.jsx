
import React from "react";

const baseStyle = 
{
  margin: "10px",
  padding: "15px 30px",
  borderRadius: "10px",
  backgroundColor: "cyan",
  cursor: "pointer",
};

const disabledStyle = 
{
  backgroundColor: "green",
  cursor: "not-allowed",
  opacity: 0.6,
};

export default function DiceBasic({ title, dice, handleClick, isDisabled }) 
{
  const buttonStyle = isDisabled
    ? { ...baseStyle, ...disabledStyle }
    : { ...baseStyle };

  return (
    <div>
      <h3>{title}</h3>
      <div style={{ fontSize: "60px" }}>{dice}</div>
      <button onClick={handleClick} style={buttonStyle} disabled={isDisabled}>
        Roll Dice
      </button>
    </div>
  );
}
