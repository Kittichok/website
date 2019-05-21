import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardLists';
import Responsive from 'react-responsive';


const Default = props => <Responsive {...props} minWidth={768} />;

function App() {
  return (
    <Default>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <CardList/>
      </body>
    </div>
    </Default>
  );
}

export default App;
