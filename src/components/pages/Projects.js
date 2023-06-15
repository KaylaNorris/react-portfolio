import React from 'react';

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
                                        <img src="assets/images/prework-study-guide-screenshot.png" alt="Screenshot of Kayla Norris's Prework Study Guide application" className="screenshots" />
                                    </a>
                                </article>
                                <article className="tile is-child notification is-warning">
                                    <p className="title is-4">Morning Java</p>
                                    <p className="subtitle is-6">HTML, CSS, JavaScript, & jQuery</p>
                                    <a href="https://kaylanorris.github.io/morning-java/">
                                        <img src="assets/images/morning-java-screenshot.png" alt="Screenshot of Morning Java application" className="screenshots" />
                                    </a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title is-4">Code Quiz</p>
                                    <p className="subtitle is-6">HTML, CSS, & JavaScript</p>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src="assets/images/code-quiz-screenshot1.png" alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src="assets/images/code-quiz-screenshot2.png" alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src="assets/images/code-quiz-screenshot3.png" alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                    <a href="https://kaylanorris.github.io/code-quiz/">
                                        <img src="assets/images/code-quiz-screenshot4.png" alt="Screenshot of Kayla Norris's code quiz application" className="screenshots" />
                                    </a>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-danger">
                                <p className="title">Bio Page</p>
                                <p className="subtitle">First Web App (HTML & CSS)</p>
                                <a href="https://kaylanorris.github.io/bio-page/">
                                    <img src="assets/images/bio-page-screenshot.png" alt="Screenshot of Kayla Norris's bio page application" className="screenshots" />
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
                                    <img src="assets/images/wall-pilates-screenshot.png" alt="Screenshot of Kayla Norris's Wall Pilates application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">CSS Cheatsheet</p>
                                <p className="subtitle is-6">CSS</p>
                                <a href="https://kaylanorris.github.io/css-cheatsheet/">
                                    <img src="assets/images/css-cheatsheet-screenshot.png" alt="Screenshot of Kayla Norris's CSS Cheatsheet application" />
                                </a>
                                <p className="title is-4 mt-5">Code Refactor</p>
                                <p className="subtitle is-6">HTML & CSS Refactor</p>
                                <a href="https://kaylanorris.github.io/mod-1-challenge/">
                                    <img src="assets/images/mod-1-challenge-screenshot.png" alt="Screenshot of Kayla Norris's Module 1 Challenge application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">Work Scheduler</p>
                                <p className="subtitle is-6">HTML, CSS, & JavaScript</p>
                                <a href="https://kaylanorris.github.io/work-scheduler/">
                                    <img src="assets/images/work-scheduler-screenshot.png" alt="Screenshot of Kayla Norris's work scheduler application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">Password Generator</p>
                                <p className="subtitle is-6">HTML, CSS, & JavaScript</p>
                                <a href="https://kaylanorris.github.io/password-generator/">
                                    <img src="assets/images/password-generator-screenshot.png" alt="Screenshot of Kayla Norris's password generator application" className="screenshots" />
                                </a>
                                <p className="title is-4 mt-5">Games Now</p>
                                <p className="subtitle is-6">JavaScript, Node.js, Express, Handlebars, MySQL, Sequelize, Bootstrap, and Heroku</p>
                                <a href="https://github.com/Alphastranger/Project-2-Team-2">
                                    <img src="assets/images/gamesnow-screenshot.png" alt="Screenshot of Games Now application" className="screenshots" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
