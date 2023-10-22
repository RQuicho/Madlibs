import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import MadlibForm from './MadlibForm';

const MadlibSentence = () => {
  const [data, setData] = useState('');
  const addData = (newData) => {
    setData(newData);
  }
  return (
    <div>
      <MadlibForm addData={addData}/>
      <p>There was a {data.color} {data.noun} who loved a {data.adjective} {data.noun2}.</p>
    </div>
  )
}

export default MadlibSentence;