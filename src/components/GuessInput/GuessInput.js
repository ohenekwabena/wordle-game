import { useState } from "react";

function GuessInput({ sendGuessData }) {
  const [guessValue, setGuessValue] = useState(" ");

  function inputSubmitHandler(event) {
    event.preventDefault();

    console.log(guessValue);
    sendGuessData((prevData) => [
      ...prevData,
      {
        data: guessValue,
        id: Math.random(),
      },
    ]);
    setGuessValue("");
  }

  return (
    <form onSubmit={inputSubmitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        value={guessValue}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        title="5 letter word"
        onChange={(event) => setGuessValue(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
