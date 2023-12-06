import Game from "./Components/Game";
import "./App.css";
// import Practice from "./Components/Practice";
import { useState } from "react";

function App() {
  // let data = [
  //   {
  //     color: "red",
  //     value: "#f00",
  //   },
  //   {
  //     color: "green",
  //     value: "#0f0",
  //   },
  //   {
  //     color: "blue",
  //     value: "#00f",
  //   },
  //   {
  //     color: "cyan",
  //     value: "#0ff",
  //   },
  //   {
  //     color: "magenta",
  //     value: "#f0f",
  //   },
  //   {
  //     color: "yellow",
  //     value: "#ff0",
  //   },
  //   {
  //     color: "black",
  //     value: "#000",
  //   },
  // ];

  const [clickedIndex, setClickedIndex] = useState(null);

  function clickHandler(index) {
    console.log(index, "index")
    setClickedIndex(index);
  }

  return (
    <div className="App">
      <Game />
      <Practice
        dataProp={data}
        clickHandlerProp={(index) => clickHandler(index)}
        clickedIndexProp={clickedIndex} 
      />
    </div>
  );
}

export default App;
