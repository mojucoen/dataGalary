import React, { useState } from "react";
import './App.css';

function App() {
  const [state, setState] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0
  });

  const shiftImageBack = () => {
    setState((prevState) => ({
      ...prevState,
      currentImg: prevState.currentImg - 1 >= 0 ? prevState.currentImg - 1 : prevState.images.length - 1
    }));
  };

  const shiftImageForward = () => {
    setState((prevState) => ({
      ...prevState,
      currentImg: (prevState.currentImg + 1) % prevState.images.length
    }));
  };

  const { images, currentImg } = state;

  return (
    <div>
      <button className="back" onClick={shiftImageBack}>Back</button>
      <img src={images[currentImg]} alt={`Image ${currentImg + 1}`} />
      <button className="forward" onClick={shiftImageForward}>Forward</button>
    </div>
  );
}

export default App;
