import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import MadlibForm from './MadlibForm';
import useToggleHide from './hooks/useToggleHide';

const MadlibSentence = () => {
  const [data, setData] = useState('');
  const [isHidden, hideForm] = useToggleHide();

  const addData = (newData) => {
    setData(newData);
  }
  return (
    <div>
      <MadlibForm addData={addData}/>
      <p>There was a {data.color} {data.noun} who loved a {data.adjective} {data.noun2}.</p>
      <button>Restart</button>
    </div>
  )
}

export default MadlibSentence;