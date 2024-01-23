function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.data}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
