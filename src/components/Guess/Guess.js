import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const statusValue = checkGuess(value, answer);
  console.log(statusValue);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${statusValue ? statusValue[num].status : undefined}`}>
          {statusValue ? statusValue[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
