import resumeDoc from '../../assets/';
import "./"

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

                        <i class="devicon-html5-plain">HTML</i>

                    </li>
                    <li>

                        <i class="devicon-css3-plain">CSS</i>

                    </li>
                    <li>

                        <i class="devicon-javascript-plain">JavaScript</i>
                    </li>
                    <li>

                        <i class="devicon-jquery-plain">jQuery</i>

                    </li>
                    <li>

                        <i class="devicon-react-original">React</i>

                    </li>
                    <li>

                        <i class="devicon-bootstrap-plain">Bootstrap</i>

                    </li>
                    <li>

                        <i class="devicon-handlebars-plain">Handlebars</i>

                    </li>
                </ul>
            </div>
            <div>
                <h3>Back-end</h3>
                <ul>
                    <li>
                        <i class="devicon-nodejs-plain">Node</i>

                    </li>
                    <li>

                        <i class="devicon-express-original">Express</i>

                    </li>
                    <li>

                        <i class="devicon-mysql-plain">MySQL</i>
                    </li>
                    <li>

                        <i class="devicon-sequelize-plain">Sequalize</i>

                    </li>
                    <li>

                        <i class="devicon-mongodb-plain">MongoDB & Mongoose</i>
                    </li>
                    <li>

                        <i class="devicon-graphql-plain">GraphQL</i>

                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;