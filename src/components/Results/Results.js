import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Results({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <p key={index} className="guess">{guesses[index] ?
          guesses[index].label.map(({letter,status}, letterIndex) => (<span className={`cell ${status}`} key={letterIndex}>{letter}</span>))
          : range(5).map((_, index) => (<span className="cell" key={index}></span>))}
        </p>
      ))}
    </div>
  );
}

export default Results;
