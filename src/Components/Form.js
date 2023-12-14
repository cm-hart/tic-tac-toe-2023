import { useState } from "react";

const Form = ({ formData, handleSubmit, handleChange }) => {
  // State variables to store form data
// console.log(handleChange, "handleChange")
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Player 1:</label>
        <input
          type="text"
          name="playerOne"
          value={formData.playerOne}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <br />
      <div>
        <label>Player 2:</label>
        <input
          type="text"
          name="playerTwo"
          value={formData.playerTwo}
          onChange={handleChange}
        />
      </div>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
