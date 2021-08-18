import React from "react";
import Box from "./Box";
import IconScroll from "./IconScroll";
import Social from "./Social"

function TopBox() {
    return(
        <div className="top-box h-full">
            <Box heading1="Hey, I'm" 
            heading2="Devayani Shivankar" 
            hasImage = "true"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8APKBlNpxcR1wwOcLP2mYManW7NXou-KWqA&usqp=CAU"
            imgAlt="profilePicture"
            p1 = "I am a third year student, pursuing my B.Tech degree in Computer Engineering at VJTI, Mumbai (India)."
            p2 = "My passion rides in developing websites, games, applications and everything that our society needs to 'TECH-UP'. Apart from this, you can also find me dancing on random notes, watching anime or playing video games."
            />
            <Social />
            <IconScroll />
        </div>
    )
}
export default TopBox;