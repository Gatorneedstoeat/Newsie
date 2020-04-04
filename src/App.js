import React from 'react';
import './css/App.scss';
import NavBar from './sections/NavBar';
import NewsArticles from './components/NewsArticles';

function App() {
  return (
    <div className="App">
     <NavBar />
     <NewsArticles />
    </div>
  );
}

export default App;
