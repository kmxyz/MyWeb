import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainPage from './pages/main';
import AboutMe from './pages/aboutme';
import { Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path = "/" Component ={MainPage}/>
        <Route path = "/about" Component ={AboutMe}/>
      </Routes>
    </div>
  );
}

export default App;
