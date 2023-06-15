import React from 'react';
import studyGuide from '../../Assets/prework-study-guide-screenshot.png'
import morningJava from '../../Assets/morning-java-screenshot.png'
import codeQuiz1 from '../../Assets/code-quiz-screenshot1.png'
import codeQuiz2 from '../../Assets/code-quiz-screenshot2.png'
import codeQuiz3 from '../../Assets/code-quiz-screenshot3.png'
import codeQuiz4 from '../../Assets/code-quiz-screenshot4.png'
import bio from '../../Assets/bio-page-screenshot.png'
import pilates from '../../Assets/wall-pilates-screenshot.png'
import cheatsheet from '../../Assets/css-cheatsheet-screenshot.png'
import codeRefactor from '../../Assets/mod-1-challenge-screenshot.png'
import work from '../../Assets/work-scheduler-screenshot.png'
import pw from '../../Assets/password-generator-screenshot.png'
import gamesNow from '../../Assets/gamesnow-screenshot.png'

export default function Projects() {
    return (
        <div>
            <section id="my-work" className="section">
                <h1 className="title is-2 has-text-info">My Work</h1>
            </section>
            <section className="section ml-5">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-primary">
                                    <p className="title is-4">Prework Study Guide</p>
                                    <p className="subtitle is-6">HTML, CSS, & JavaScript</p>
                                    <a href="https://kaylanorris.github.io/prework-study-guide/">
                                        <img src={studyGuide} alt="Screenshot of Kayla Norris's Prework Study Guide application" className="screenshots" />
                                    </a>
                                </article>
                                <article className="tile is-child notification is-warning">
                                    <p className="title is-4">Morning Java</p>
                                    <p className="subtitle is-6">HTML, CSS, JavaScript, & jQuery</p>
                                    <a href="https://kaylanorris.github.io/morning-java/">
                                        <img src={morningJava} alt="Screenshot of Morning Java application" className="screenshots" />
                                    </a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title is-4">Code Quiz</p>
                                    <p className="subtitle is-6">HTML, CSS, & JavaScript</p>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src={codeQuiz1} alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src={codeQuiz2} alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src={codeQuiz3} alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src={codeQuiz4} alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-danger">
                                <p className="title">Bio Page</p>
                                <p className="subtitle">First Web App (HTML & CSS)</p>
                                <a href="https://kaylanorris.github.io/bio-page/">
                                    <img src={bio} alt="Screenshot of Kayla Norris's bio page application" className="screenshots" />
                                </a>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-success">
                            <div className="content">
                                <p className="title is-4">Wall Pilates</p>
                                <p className="subtitle is-6">HTML & CSS</p>
                                <a href="https://kaylanorris.github.io/wall-pilates/">
                                    <img src={pilates} alt="Screenshot of Kayla Norris's Wall Pilates application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">CSS Cheatsheet</p>
                                <p className="subtitle is-6">CSS</p>
                                <a href="https://kaylanorris.github.io/css-cheatsheet/">
                                    <img src={cheatsheet} alt="Screenshot of Kayla Norris's CSS Cheatsheet application" />
                                </a>
                                <p className="title is-4 mt-5">Code Refactor</p>
                                <p className="subtitle is-6">HTML & CSS Refactor</p>
                                <a href="https://kaylanorris.github.io/mod-1-challenge/">
                                    <img src={codeRefactor} alt="Screenshot of Kayla Norris's Module 1 Challenge application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">Work Scheduler</p>
                                <p className="subtitle is-6">HTML, CSS, & JavaScript</p>
                                <a href="https://kaylanorris.github.io/work-scheduler/">
                                    <img src={work} alt="Screenshot of Kayla Norris's work scheduler application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">Password Generator</p>
                                <p className="subtitle is-6">HTML, CSS, & JavaScript</p>
                                <a href="https://kaylanorris.github.io/password-generator/">
                                    <img src={pw} alt="Screenshot of Kayla Norris's password generator application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">Games Now</p>
                                <p className="subtitle is-6">JavaScript, Node.js, Express, Handlebars, MySQL, Sequelize, Bootstrap, and Heroku</p>
                                <a href="https://github.com/Alphastranger/Project-2-Team-2">
                                    <img src={gamesNow} alt="Screenshot of Games Now application" className="screenshots" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
