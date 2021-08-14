import React from "react";
import Box from "./Box";
import IconScroll from "./IconScroll";

function TopBox() {
    return(
        <div className="top-box">
            <Box heading1="Hello!" 
            heading2="I'm Devayani Shivankar" 
            p1 = "I am a third year student, pursuing my B.Tech degree in Computer Engineering at VJTI, Mumbai (India)."
            p2 = "My passion rides in developing websites, games, applications and everything that our society needs to 'TECH-UP'. Apart from this, you can also find me dancing on random notes, watching anime or playing video games. Here's all about me!"
            />
            <IconScroll />
        </div>
    )
}
export default TopBox;