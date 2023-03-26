import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Results from '../Results/Results';
import WordleInput from '../WordleInput';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('playing');

  function addGuess(guess) {
    setGuesses((guesses) => [...guesses, {
      id: Math.random(),
      label: checkGuess(guess, answer),
    }]);

    if (guess === answer) {
      setGameState('won');
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameState('lost');
    }
  }

  return <>
    {gameState === 'won' && (<div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>)}

    {gameState === 'lost' && (<div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
</div>)}
    <Results guesses={guesses} />
    <WordleInput addGuess={addGuess} gameState={gameState} />
  </>;
}

export default Game;
