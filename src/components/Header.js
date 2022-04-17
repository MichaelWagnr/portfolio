import React from 'react';
import { LinkedIn, Email, GitHubIcon } from './Icons';

const Header = () => {
    return (
        <header>
            <h1>Michael Wagner</h1>

            <a href="mailto:michaelwagner780@gmail.com">
                <div className="contact-icon email">{Email}</div>
            </a>

            <a href="https://www.linkedin.com/in/michael-wagner-9339881a0/">
                <div className="contact-icon linked-in">{LinkedIn}</div>
            </a>

            <a href="https://github.com/MichaelWagnr">
                <div className="contact-icon github">{GitHubIcon}</div>
            </a>

        </header>
    )
}


export default Header;