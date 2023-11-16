import resumeDoc from '../../assets/brennyresume.pdf';
import "./Resume.css"

function Resume() {
    // Resume page on website
    return (
        <div className="resume">
            <div className="resumeDoc">
                <h2>RESUME</h2>
                {/* Downloadable resume link */}
                <a href={resumeDoc} download>
                    Download
                </a>
            </div>

            <div className="techstack">
                <h2>TECH STACK</h2>
            </div>
            <div className="stack">
                <div className="frontend">
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
                <div className="backend">
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

                            MongoDB
                        </li>
                        <li>    
                            Mongoose
                        </li>
                        <li>

                            GraphQL

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;