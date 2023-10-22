import React, {useState} from 'react';

const useToggleHide = () => {
  const [state, setState] = useState(false);
  const hideForm = () => {
    setState(state => !state);
  }
  return [state, hideForm]
}

export default useToggleHide;