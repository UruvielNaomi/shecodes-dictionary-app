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
          Coded by Naomi Stacia
        </footer>

    </div>
  </div>
  );
}

export default App;

