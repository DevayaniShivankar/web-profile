import React from "react";
import projects from "../projects"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function ProjectBox() {
    return(
        <div className="flex flex-none md:flex-1 flex-col gap-4 text-left md:mx-64 place-content-center">
            {projects.map(project => {
                return(
                    <div className="md:px-48 px-12">
                        <div className="flex flex-row gap-4 p-4">
                        <ArrowRightAltIcon />
                        <div className="text-xl md:text-2xl font-extrabold">{project.title}</div>
                        </div>
                        <div>{project.content}</div>
                    </div>
            )}
            )}
            
        </div>
    )
}

export default ProjectBox;