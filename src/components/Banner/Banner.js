import React from "react";

function Banner({ tries, guess, answer }) {
  let bannerOutput;

  if (guess === answer) {
    bannerOutput = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{tries} guesses</strong>.
        </p>
      </div>
    );
  }

  if (guess !== answer) {
    bannerOutput = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
  return <>{bannerOutput}</>;
}

export default Banner;
