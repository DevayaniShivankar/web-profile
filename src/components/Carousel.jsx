import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {
    return(
        // <div className="carousel relative shadow-2xl">
        // <div className="carousel-inner relative overflow-hidden w-full">
        
        // <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" checked="checked" />
        // <div className="carousel-item absolute opacity-0 h-1/2">
        //     <div className="block h-full w-full text-purple-1 text-5xl text-center">Slide 1</div>
        // </div>
        // <label for="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-purple-3 rounded-full bg-dark-grey leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        // <label for="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-purple-3 rounded-full bg-dark-grey leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
        
        
        // <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"/>
        // <div className="carousel-item absolute opacity-0 h-1/2" >
        //     <div className="block h-full w-full text-purple-1 text-5xl text-center">Slide 2</div>
        // </div>
        // <label for="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-purple-3 rounded-full bg-dark-grey leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        // <label for="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-purple-3 rounded-full bg-dark-grey leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
        
        
        // <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"/>
        // <div className="carousel-item absolute opacity-0 h-1/2">
        //     <div className="block h-full w-full text-purple-1 text-5xl text-center">Slide 3</div>
        // </div>
        // <label for="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-purple-3 rounded-full bg-dark-grey leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        // <label for="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-purple-3 rounded-full bg-dark-grey leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        // <ol className="carousel-indicators">
        //     <li className="inline-block mr-3">
        //         <label for="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-purple-1 hover:text-dark-grey">•</label>
        //     </li>
        //     <li className="inline-block mr-3">
        //         <label for="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-purple-1 hover:text-dark-grey">•</label>
        //     </li>
        //     <li className="inline-block mr-3">
        //         <label for="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-purple-1 hover:text-dark-grey">•</label>
        //     </li>
        // </ol>
        
        // </div>
        // </div>
        <div className="flex flex-none md:flex-1 flex-row gap-4 text-center md:mx-64 place-content-center">
            <div className=" inline-block invisible md:visible md:my-auto"><button className="animate-ping text-purple-3 py-2 px-4 rounded"><ArrowBackIosIcon /></button></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis a. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Sed lectus vestibulum mattis ullamcorper velit sed. In dictum non consectetur a erat nam. Sociis natoque penatibus et magnis. Sed libero enim sed faucibus turpis. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Leo a diam sollicitudin tempor. Et tortor at risus viverra adipiscing at in tellus. Aliquet lectus proin nibh nisl condimentum id venenatis. Elit duis tristique sollicitudin nibh. Tellus orci ac auctor augue mauris augue neque. Tincidunt praesent semper feugiat nibh sed pulvinar. Eu feugiat pretium nibh ipsum consequat. Felis donec et odio pellentesque. Diam maecenas sed enim ut sem viverra aliquet.</div>
            <div className="inline-block invisible md:visible md:my-auto"><button className="animate-ping text-purple-3 py-2 px-4 rounded"><ArrowForwardIosIcon /></button></div>
        </div>
    )
}

export default Carousel;