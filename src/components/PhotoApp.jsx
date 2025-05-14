import React, { useState } from "react";
import NavBar from "./NavBar";

export default function PhotoApp() {
  const [feedback, setFeedback] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);

    if (clickCount === 0) {
      setFeedback("Please move to the left");
    } else if (clickCount === 1) {
      setFeedback("A little more to the left");
    } else if (clickCount === 2) {
      setFeedback("");
    }
  };
  const imageToShow =
    clickCount >= 2 ? (
      <img
        src="https://www.yourcentralvalley.com/wp-content/uploads/sites/54/2024/12/Monkey-found-inside-a-Rolls-Royce-in-Madera-County.jpg"
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        alt="Monkey"
      />
    ) : null;

  return (
    <>
    <NavBar />
      <h1>Take a Picture</h1>
      <img
        src="https://www.pbtech.co.nz/imgprod/C/A/CAMCNP0850__1.jpg"
        alt="camera"
        className="camera"
      />
      {feedback && <p>{feedback}</p>}
      <br />
      <button onClick={handleClick}>click</button>
      {imageToShow}
    </>
  );
}
