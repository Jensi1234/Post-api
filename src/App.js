import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import PageContainer from './components/PageContainer';
import AppProvider from './context/AppContext';
import PostProvider from './context/PostContext';


function App() {
  return (
    <AppProvider>
      <div>
        <Header />
        <PostProvider>
          <PageContainer />
        </PostProvider>
      </div>
    </AppProvider>
  );
}

export default App;
