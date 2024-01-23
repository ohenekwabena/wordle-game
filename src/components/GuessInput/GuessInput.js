import { useState } from "react";

function GuessInput({ sendGuessData, endOfGame }) {
  const [guess, setGuess] = useState(" ");

  function inputSubmitHandler(event) {
    event.preventDefault();
    sendGuessData(guess);
    setGuess("");
  }

  return (
    <form onSubmit={inputSubmitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        value={guess}
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase().trim();
          setGuess(nextGuess);
        }}
        disabled={endOfGame}
      ></input>
    </form>
  );
}

export default GuessInput;
