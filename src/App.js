import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MainPage from "./pages/main";
import AboutMe from "./pages/aboutme";
import Experience from "./pages/experience";
import ContactMe from "./pages/contactme";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <AboutMe />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default App;
