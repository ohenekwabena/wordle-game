import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSetGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  const tries = guesses.length;
  const cloneGuesses = [...guesses];
  const lastGuess = cloneGuesses.pop();
  const endOfGame = tries === NUM_OF_GUESSES_ALLOWED || lastGuess === answer;

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput sendGuessData={handleSetGuess} endOfGame={endOfGame} />;
      {endOfGame && <Banner tries={tries} guess={lastGuess} answer={answer} />}
    </>
  );
}

export default Game;
