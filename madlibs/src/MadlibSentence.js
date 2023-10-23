import React, { useState } from 'react';

const MadlibSentence = ({data}) => {  
  const handleRestart = () => {
    window.location.reload();
  }

  return (
    <div>
      <p>There was a {data.color} {data.noun} who loved a {data.adjective} {data.noun2}.</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default MadlibSentence;