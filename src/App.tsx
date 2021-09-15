import React from 'react';
import logo from './logo.svg';
import "bootswatch/dist/litera/bootstrap.min.css"
import './App.css';
import Chat from './components/chat';

function App() {
  return (
    <div className="container">
      <Chat></Chat>
    </div>
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         HAy ve zany fotsiny e
        </a>
      </header>
    </div>*/
  );
}

export default App;
