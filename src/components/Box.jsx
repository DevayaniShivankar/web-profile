import React from "react";
import '../styles.css';

function Box(props) {
    return(
        <div className="content-wrapper relative flex flex-col">
        <div className="container mx-auto flex flex-wrap justify-between items-center box-content py-12 md:w-5/6">
            <div className="h-full w-full text-center">
                <div className="py-4">
                <h1 className="text-4xl">{props.heading1}</h1>
                <h1 className="text-4xl">{props.heading2}</h1>
                </div>
                <div className="pt-14 px-8 md:px-0">
                <p className="text-xl">{props.p1}</p> 
                <p className="text-xl">{props.p2}</p> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default Box;