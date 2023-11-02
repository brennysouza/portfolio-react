// Importing from dependencies react and react-router-dom
import  { Link } from 'react-router-dom';
import "./"

function Header() {
    return (
        <header className="header">
            <h1>BRENNY SOUZA</h1>

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