import React, { useState, useRef } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import './styles/App.css'
import PostItem from './components/PosItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App () {
  const [posts, setPosts] = useState(
    [
      { id: 1, title: 'Javascript', body: 'Description' },
      { id: 2, title: 'Javascript 2', body: 'Description 2' },
      { id: 3, title: 'Javascript 3', body: 'Description 3' },
    ])
  const [title, setTitle] = useState('')

  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    console.log('po kliknutí title=',title)
    console.log('po kliknutí bodyInputRef.current.value=',bodyInputRef.current.value)
    console.log('po kliknutí bodyInputRef.current=',bodyInputRef.current)

  }
  return (
    <div className="App">
      <form>
        {/*řízená komponenta*/ }
        <MyInput
          value={ title }
          onChange={ e => setTitle(e.target.value) }
          type="text"
          placeholder="Název postu"/>

        {/*neřízená komponenta*/}

        {/*<input*/}
        {/*  ref={bodyInputRef}*/}
        {/*  type="text" />*/}

        <MyInput
          ref = {bodyInputRef}
          type="text"
          placeholder="Popis postu"/>

        <MyButton type="submit" onClick={ addNewPost }>Vytvořit post</MyButton>
      </form>
      <PostList posts={ posts } title="Seznam JS"/>
    </div>
  );
}

export default App;
