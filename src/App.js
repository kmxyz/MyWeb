import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MainPage from "./pages/main";
import AboutMe from "./pages/aboutme";
import Experience from "./pages/experience";
import ContactMe from "./pages/contactme";
import Footer from "./components/footer";
import Skill from "./pages/skill";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <AboutMe />
      <Skill />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
