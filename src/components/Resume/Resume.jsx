import resumeDoc from '../../assets/brennyresume.pdf';
import "./Resume.css"

function Resume() {
    return (
        <div className="resume">
            <div>
                <h2>RESUME</h2>
                <a href={resumeDoc} download>
                    Click here to download my resume
                </a>
            </div>

            <div>
                <h2>TECH STACK</h2>
                <h3>Front-end</h3>
                <ul>
                    <li>

                        HTML

                    </li>
                    <li>
                        CSS

                    </li>
                    <li>

                        JavaScript
                    </li>
                    <li>

                        jQuery

                    </li>
                    <li>

                        React

                    </li>
                    <li>

                        Bootstrap

                    </li>
                    <li>

                        Handlebars

                    </li>
                </ul>
            </div>
            <div>
                <h3>Back-end</h3>
                <ul>
                    <li>
                        Node

                    </li>
                    <li>

                        Express

                    </li>
                    <li>

                        MySQL
                    </li>
                    <li>

                        Sequalize

                    </li>
                    <li>

                        MongoDB & Mongoose
                    </li>
                    <li>

                        GraphQL

                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;