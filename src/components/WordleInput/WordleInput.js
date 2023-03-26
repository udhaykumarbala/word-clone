import React from "react";

function WordleInput({addGuess, gameState}) {
  const [word, setWord] = React.useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addGuess(word)
            console.log(word);
            setWord('');
        }} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                disabled={gameState !== 'playing'}
                id="guess-input"
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                value={word}
                onChange={(e) => setWord(e.target.value.toUpperCase())}
            />
        </form>
    );
}

export default WordleInput;
