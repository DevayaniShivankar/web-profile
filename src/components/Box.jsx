import React from "react";

function Box(props) {

    const containsImage = props.hasImage;

    return(
        <div className="content-wrapper relative flex flex-col">
        <div className="container mx-auto flex flex-wrap justify-between items-center box-content py-10 md:w-5/6">
            <div className="container-inner mx-auto h-auto text-center">
                <div className="py-4">
                <h1 className="heading1 text-4xl md:text-6xl font-extrabold">{props.heading1}</h1>
                <h1 className="heading2 text-3xl md:text-5xl pt-4 font-medium">{props.heading2}</h1>
                </div>
                <div className="desc grid gap-4  place-items-center md:grid-cols-2 pt-8 px-8 md:px-20 ">
                    {containsImage && <div>
                    <img className="rounded-full h-72 w-72" alt={props.imgAlt} src={props.img}/>
                    </div>}
                    <div className="box-conten">
                    <p className="text-lg md:text-xl text-justify">{props.p1}</p> 
                    <p className="text-lg md:text-xl text-justify">{props.p2}</p> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Box;