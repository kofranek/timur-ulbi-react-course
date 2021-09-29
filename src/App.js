import React from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import './styles/App.css'

function App () {
  return (
    <div className="App">

      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>
            Javascript - programovací jazyk
          </div>
        </div>
        <div className="post__btns">
          <button>Odstranit</button>
        </div>
      </div>

    </div>
  );
}

export default App;
