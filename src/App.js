import React, { useState } from 'react'
import Counter from './components/Counter';

function App () {

  const [likes, setLikes] = useState(6)
  const [value, setValue] = useState('text in input')

  function increment () {
    setLikes(likes + 1)
  }

  function decrement () {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
     <Counter/>
    </div>
  );
}

export default App;
