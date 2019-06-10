import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardLists';
import Responsive from 'react-responsive';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-141787668-1');

const Default = props => <Responsive {...props} minWidth={768} />;

function App() {
  return (
      <div className="App">
        {ReactGA.pageview(window.location.pathname + window.location.search)}
        <body>
          <CardList/>
        </body>
      </div>
  );
}

export default App;
