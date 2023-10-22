import React from 'react';
import MadlibSentence from './MadlibSentence';

const Madlib = () => {
  return (
    <div>
      <h1>Madlibs!</h1>
      <MadlibSentence />
      <button>Restart</button>
    </div>
  )
}

export default Madlib;