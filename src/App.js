import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MainPage from "./pages/main";
import AboutMe from "./pages/aboutme";
import Experience from "./pages/experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
