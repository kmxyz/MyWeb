import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainPage from './pages/main';
import AboutMe from './pages/aboutme';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <AboutMe />
    </div>
  );
}

export default App;
