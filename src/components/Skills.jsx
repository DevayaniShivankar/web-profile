import React from "react";
import Box from "./Box";
import Tech from "./Tech"

function Skills() {
    return(
        <div>
            <Box 
                heading1="My tech stack"
                heading2="All that I've learned so far"
            />
            <Tech />
        </div>
    )
}

export default Skills;