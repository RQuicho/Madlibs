import React, {useState} from 'react';
import useToggleHide from './hooks/useToggleHide';
// import useHandleChange from './hooks/useHandleChange';
import MadlibSentence from './MadlibSentence';

const MadlibForm = () => {
  const initialState = {
    noun: '',
    noun2: '',
    adjective: '',
    color: ''
  }
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState('');
  const [isHidden, hideForm] = useToggleHide();
  // const [changedData, handleChange] = useHandleChange();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const addData = (newData) => {
    setData(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addData({...formData});
    setFormData(initialState);
    hideForm();
  }


  return (
    <>
      <div style={{display: isHidden ? 'none' : 'block'}}>
        <form onSubmit={handleSubmit}> 
          <input 
            id='noun'
            type='text'
            name='noun'
            placeholder='noun'
            value={formData.noun}
            onChange={handleChange} 
          />
          <input 
            id='noun2'
            type='text'
            name='noun2'
            placeholder='noun2'
            value={formData.noun2}
            onChange={handleChange} 
          />
          <input 
            id='adjective'
            type='text'
            name='adjective'
            placeholder='adjective'
            value={formData.adjective}
            onChange={handleChange} 
          />
          <input 
            id='color'
            type='text'
            name='color'
            placeholder='color'
            value={formData.color}
            onChange={handleChange} 
          />
          <button>Get Story</button>
        </form>
      </div>
      <div style={{display: !isHidden ? 'none' : 'block'}}>
        <MadlibSentence data={data}/>
      </div>
    </>
  )
}

export default MadlibForm;