import Header from './components/Header';
import './App.css';
import Post from './components/Post'
import { useState } from 'react';


function App() {

  const[showComments, setShowComments] = useState(true)

  const toggleComments = () =>{
    setShowComments(!showComments)
  }
  return (
    <div>
      <Header toggleComments={toggleComments} showComments={showComments} />
      <Post showComments={showComments} />
    </div>
  );
}

export default App;
