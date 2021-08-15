import React from "react";
import Header from "./Navbar";
import '../styles.css';
import TopBox from "./TopBox"
import HorizontalRule from "./HorizontalRule"
import Skills from "./Skills"
import Projects from "./Projects";

function App() {
  return (
    <div>
    <Header />
    <TopBox />
    <Skills />
    <HorizontalRule />
    <Projects />
    <HorizontalRule />
    </div>
  );
}

export default App;
