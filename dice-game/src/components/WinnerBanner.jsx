
import React from "react";

export default function WinnerBanner({ winnerText, onReset }) 
{
  if (!winnerText) return null; 

  const bannerStyle = 
  {
    backgroundColor: "#222",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "20px",
    fontSize: "24px",
    animation: "fadeIn 0.6s ease-in-out",
  };

  const buttonStyle = 
  {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "10px",
    backgroundColor: "#00bcd4",
    color: "black",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div style={bannerStyle}>
      <div>{winnerText}</div>
      <button style={buttonStyle} onClick={onReset}>
        Play Again 🔁
      </button>
    </div>
  );
}
