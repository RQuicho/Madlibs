import React, {useState} from 'react';

const useHandleChange = () => {
  const initialState = {
    noun: '',
    noun2: '',
    adjective: '',
    color: ''
  }
  const [formData, setFormData] = useState(initialState);
  
  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }
  return [formData, handleChange]
}

export default useHandleChange;