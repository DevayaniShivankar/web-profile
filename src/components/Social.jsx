import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Social() {
    return(
        <div className="container mx-auto text-center">
            <div className="social-text text-xl mb-2">
                <p><span className="text-purple-4 font-bold">Say hello</span>, or keep scrolling.</p>
            </div>
            <div className="py-4 social-icons">
            <a className="m-6" href="https://github.com/DevayaniShivankar"><GitHubIcon fontSize="large"/></a>
            <a className="m-6" href="https://www.linkedin.com/in/devayani-shivankar-592608218/"><LinkedInIcon fontSize="large"/></a>
            <a className="m-6" href="mailto:shivankardevayani@gmail.com"><MailOutlineIcon fontSize="large"/></a>
            </div>
        </div>
    )
}

export default Social;