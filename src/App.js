import './App.css';
import React from 'react';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className='App-header'>
        ☆ Dictionary
        </header>
        
        <main>
          <Dictionary />
        </main>

        <footer>
          <a href='https://github.com/UruvielNaomi' target='blank'>Coded by Naomi Stacia</a>
        </footer>

    </div>
  </div>
  );
}

export default App;

