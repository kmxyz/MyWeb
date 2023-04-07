import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainPage from './pages/main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
    </div>
  );
}

export default App;
