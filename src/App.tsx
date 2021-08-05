import React from 'react';
import './App.css';
import CardList from './components/CardLists';
import ReactGA from 'react-ga';
import Profile from './components/Profile';
import NavBar from './components/Navbar';
import Project from './components/Project';
ReactGA.initialize('UA-141787668-1');

function App() {
  return (
    <div className="App">
      {ReactGA.pageview(window.location.pathname + window.location.search)}
      <NavBar />
      <div className="full-screen" id="profile">
        <Profile />
      </div>
      <div className="full-screen" id="project">
        <Project />
      </div>
      <div className="full-screen" id="journey">
        <CardList />
      </div>
    </div>
  );
}

export default App;
