### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  - A popular, powerful front-end framework developed by Facebook.
  - Uses components to build a modular application

- What is Babel?

  - A free and open-source JavaScript transcompiler. (https://en.wikipedia.org/wiki/Babel_(transcompiler))
  - Converts ECMAScript 2015+ code into backwards compatibile version of JavaScript in current and older browsers. (https://babeljs.io/docs/)

- What is JSX?

  - A JavaScript extension that allows creation of DOM trees using an XML-like syntax. (https://en.wikipedia.org/wiki/JSX_(JavaScript))
  - JavaScript XML (https://www.w3schools.com/react/react_jsx.asp)
  - Allows us to write HTML in React (https://www.w3schools.com/react/react_jsx.asp)

- How is a Component created in React?

  - A React class with a render method:
    const Hello = () => {
    return <p>Hello There!</p>
    }

- What are some difference between state and props?

  - (https://lessons.springboard.com/Events-and-React-State-b31ad2ff3d38486c93aa529d0e4468f9)
  - state: Data specific to a component. Can change. State is created using useState, which returns an array with two values (piece of state, function to change it).
  - props: Configure your component, are immutable, can be strings. A placeholder for a property you can pass in the component function or when you call the component. An object that is defined for each component. You can destrcuture it in a compoenent and add a default value.

- What does "downward data flow" refer to in React?

  - The parent component will pass down the required state in the form of read-only props and the children will use the call-back functions to update the stat in the parent. (https://www.letsreact.org/data-flow-in-react/)

- What is a controlled component?

  - (https://lessons.springboard.com/React-Forms-1f01e81d33b04a93b2922d4c6bb4dc65#70c2c42f045a4630a2ccb2b8586ba423)
  - A "dumb" component. Small components that are simple and do not have state.
  - In HTML, form elements (<input>, <textarea>, <select>) typically maintain their own state and update it based on user input. In React, mutable state is kept in the state of components, and only updated with the functionr eturned to useState()
  - An input form element whose value is controlled by React. (https://legacy.reactjs.org/docs/forms.html#controlled-components)

- What is an uncontrolled component?

  - (https://lessons.springboard.com/React-Forms-1f01e81d33b04a93b2922d4c6bb4dc65#2b92c643312f4da3a7f5651f31ce5b48)
  - When React is not in control of the form state
  - Form data is handled by the DOM itself (https://legacy.reactjs.org/docs/uncontrolled-components.html)

- What is the purpose of the `key` prop when rendering a list of components?

  - (https://lessons.springboard.com/React-JSX-and-Props-5cef5c7da8e8443baecc4e80bbe4cc1a)
  - Keys help React idenfity which items have changed, are add, or are removed.
  - They should always be unique and not change.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  - An array index value can change and the key prop needs to be unique and not change.

- Describe useEffect. What use cases is it used for in React components?

  - (https://lessons.springboard.com/React-Effects-and-Refs-77ffbad46ab44610bce0fceb24212947#32a1ba6ff2d9406d93ab3c62f385de19)
  - A built in hook for "side effects" (fetch data, start a timer, manually change DOM)
  - each render has its own effects
  - will run after the first render
  - will run after all rerenders by default
  - accepts a callback function as its first argument
  - returns undefined or a function

- What does useRef do? Does a change to a ref value cause a rerender of a component?

  - (https://lessons.springboard.com/React-Effects-and-Refs-77ffbad46ab44610bce0fceb24212947#32a1ba6ff2d9406d93ab3c62f385de19)
  - A built in hook.
  - Returns a mutable object with a key of current, whose value is equal to the initial value passed in the hook.
  - An object that persists across renders (like a local variable, but independent of state).
  - Mutating the object does not trigger a re-render.
  - Can manipulate current data
  - Can be used to show error messages, button clicks, watch events, etc
  - Takes the current state of a variable

- When would you use a ref? When wouldn't you use one?

  - (https://lessons.springboard.com/React-Effects-and-Refs-77ffbad46ab44610bce0fceb24212947#32a1ba6ff2d9406d93ab3c62f385de19)
  - When you want to access an underlying DOM element.
  - Setting up/clearing timers
  - You would not use a ref if that variable is going to change or change state.

- What is a custom hook in React? When would you want to write one?
  - (https://lessons.springboard.com/Custom-Hooks-d12fd105793747fd998742671233a7fb)
  - A JavaScript function that typically uses built in hooks
  - Can be reusable across different components
  - You can write one to abastract logic, handle repeated tasks, or generate your own JSX.
