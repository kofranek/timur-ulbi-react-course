import React, {useState} from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import './styles/App.css'
import PostItem from './components/PosItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'Javascript', body: 'Description'},
            {id: 2, title: 'Javascript 2', body: 'Description 2'},
            {id: 3, title: 'Javascript 3', body: 'Description 3'},
        ])
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        //console.log('po kliknutí: title=', title, 'body=', body)
        // const newPost = {
        //   id: Date.now(),
        //   title,
        //   body
        // }
        // setPosts([...posts, newPost])
        // console.log('newPost=', newPost)
        if (post.title && post.body) {
            setPosts([...posts, {...post, id: Date.now()}])
            setPost({title: '', body: ''})
        }
    }

    return (
        <div className="App">
            <form>
                {/*řízená komponenta*/}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Název postu"/>

                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type='text'
                    placeholder='Popis postu'/>


                <MyButton type='submit' onClick={addNewPost}>Vytvořit post</MyButton>
            </form>
            <PostList posts={posts} title="Seznam JS"/>
        </div>
    );
}

export default App;
