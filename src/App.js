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
  const [posts2, setPosts2] = useState(
    [
      { id: 1, title: 'Python', body: 'Description' },
      { id: 2, title: 'Python 2', body: 'Description 2' },
      { id: 3, title: 'Python 3', body: 'Description 3' },
    ])
  return (
    <div className="App">
      <PostList posts={ posts } title="Seznam JS" />
      <PostList posts={ posts2 } title="Seznam Python" />
    </div>
  );
}

export default App;
