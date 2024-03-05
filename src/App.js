import Header from './components/Header';
import PageContainer from './components/PageContainer';
import AppProvider from './context/AppContext';
import PostProvider from './context/PostContext';
import './App.css';


function App() {
  return (
    <AppProvider>
      <Header />
      <PostProvider>
        <PageContainer />
      </PostProvider>          
    </AppProvider>
  );
}

export default App;
