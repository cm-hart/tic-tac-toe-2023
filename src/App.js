import Game from "./Components/Game";
import "./App.css";
// import Practice from "./Components/Practice";
import { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [formData, setFormData] = useState({
    playerOne: "",
    playerTwo: "",
  });

  const [playerNames, setPlayerNames] = useState({});

  // Update the state when input values change
  const handleInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let test = formData;
    setPlayerNames(formData);
    // You can perform additional actions with the form data here
    console.log("test", test);
  };

  return (
    <div className="App">
      <Game
      players={playerNames} 
      />
      <Form
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
      />
      {playerNames.playerOne ? <div>
        <p>Player One: {playerNames.playerOne}</p>
        <p>Player Two: {playerNames.playerTwo}</p>
      </div> : null }
     
    </div>
  );
}

export default App;
