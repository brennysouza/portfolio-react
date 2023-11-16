import "./Footer.css"

// below is the footer of the webpage that will display on every page, includes links to social media pages
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
                    <a href="https://twitter.com/codebren">Twitter &#128231;</a>
                </li>
            </ul>
        </footer>
    );
}

export default footer;