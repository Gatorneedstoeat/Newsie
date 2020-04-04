import React from 'react';
import './css/App.scss';
import 'animate.css/animate.min.css';
import NavBar from './sections/NavBar';
import News from './sections/News';

function App() {
  return (
    <div className="App">
     <NavBar />
     <News />
    </div>
  );
}

export default App;
