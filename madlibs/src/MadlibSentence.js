import React from 'react';

const MadlibSentence = ({data}) => {  
  return (
    <div>
      <p>There was a {data.color} {data.noun} who loved a {data.adjective} {data.noun2}.</p>
      <button>Restart</button>
    </div>
  )
}

export default MadlibSentence;