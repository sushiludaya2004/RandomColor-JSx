import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#eee");

  function randomValue(length) {
    return Math.floor(Math.random() * length);
  }

  const handleHexColor = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";

    for (let index = 0; index < 6; index++) {
      hexColor += num[randomValue(num.length)];
    }
    setColor(hexColor);
  };

  const handleRgbColor = () => {
    const r = randomValue(256);
    const g = randomValue(256);
    const b = randomValue(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  };

  useEffect(() => {
    typeOfColor === "hex" ? handleHexColor() : handleRgbColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        color: "#333",
      }}
    >
      <div style={{ fontSize: "20px", marginBottom: "20px" }}>
        <h2>Color Type: {typeOfColor.toUpperCase()}</h2>
        <h2>Current Color: {color}</h2>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setTypeOfColor("hex")}>
          Switch to HEX color
        </button>
        <button onClick={() => setTypeOfColor("rgb")}>
          Switch to RGB color
        </button>
      </div>
      <button
        onClick={() =>
          typeOfColor === "hex" ? handleHexColor() : handleRgbColor()
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}

export default App;
