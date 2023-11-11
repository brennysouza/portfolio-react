// Importing from dependencies react and react-router-dom
import  { Link } from 'react-router-dom';
import "./Header.css"
import { useTypeFx } from "../../hooks/type-fx";
// import { useState, useEffect } from 'react';


function Header() {
    const textHeader = useTypeFx("{BRENNY SOUZA}", 300);
    return (
        <header className="header">
            
            {/* <h1>&#123;BRENNY SOUZA&#125;</h1> */}
            <h1>{textHeader}</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            PORTFOLIO
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            RESUME
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;