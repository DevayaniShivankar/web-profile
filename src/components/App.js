import React from "react";
import Header from "./Navbar";
import '../styles.css';
import Box from "./Box"
import HorizontalRule from "./HorizontalRule"
import IconScroll from "./IconScroll";

function App() {
  return (
    <div>
    <Header />
    <Box heading1="Hello!" 
    heading2="I'm Devayani Shivankar" 
    p1 = "I am a third year student, pursuing my B.Tech degree in Computer Engineering at VJTI, Mumbai (India)."
    p2 = "My passion rides in developing websites, games and everything that our society needs to 'TECH-UP'. Apart from this, you can always find me dancing on random notes or watching anime or playing video games. Here's all about me!"
    />
    <IconScroll />
    <HorizontalRule />
    </div>
  );
}

export default App;
