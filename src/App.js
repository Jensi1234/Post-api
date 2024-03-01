import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import PageContainer from './components/PageContainer';


function App() {

  const[showComments, setShowComments] = useState(true)

  const toggleComments = () =>{
    setShowComments(!showComments)
  }
  return (
    <div>
      <Header toggleComments={toggleComments} showComments={showComments} />
      <PageContainer  showComments={showComments}/>
    </div>
  );
}

export default App;
