import React from 'react';
import './App.css';
import CardList from './components/CardLists';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-141787668-1');

function App() {
  return (
    <div className="App">
      {ReactGA.pageview(window.location.pathname + window.location.search)}
      <CardList />
    </div>
  );
}

export default App;
