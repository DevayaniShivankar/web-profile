import React from "react";
import '../styles.css';

function Box() {
    return(
        <div className="content-wrapper relative flex flex-col">
        <div className="container mx-auto flex flex-wrap justify-between items-center bg-purple-1 box-content p-4 md:w-5/6">
            <div className="h-full w-full grid gap-4 grid-rows-3 md:grid-cols-4">
                <div className="bg-grey-purple col-span-2 md:col-start-2">heading</div>
                <div className="bg-grey-purple row-span-2 col-span-2 md:col-start-2">content</div>
            </div>
        </div>
        </div>
    )
}

export default Box;