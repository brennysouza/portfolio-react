import "./Footer.css"

function footer() {
    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href="https://github.com/brennysouza">GitHub &#128187;</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/brenny-s-664566268/">LinkedIn &#128173;</a>
                </li>
                <li>
                    <a href="mailto: brennysouza@protonmail.com">Email &#128231;</a>
                </li>
            </ul>
            <div className="footer-rights">
                <h5>&copy; 2023 Brenny Souza / All Rights Are Reserved.</h5>
            </div>
        </footer>
    );
}

export default footer;