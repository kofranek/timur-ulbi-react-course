import React, { useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import './styles/App.css'
import PostItem from './components/PosItem';
import PostList from './components/PostList';

function App () {
  const [posts, setPosts] = useState(
    [
      { id: 1, title: 'Javascript', body: 'Description' },
      { id: 2, title: 'Javascript 2', body: 'Description 2' },
      { id: 3, title: 'Javascript 3', body: 'Description 3' },
    ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Název postu" />
        <input type="text" placeholder="Popis postu" />
        <button>Vytvořit post</button>
      </form>
      <PostList posts={ posts } title="Seznam JS" />
    </div>
  );
}

export default App;
