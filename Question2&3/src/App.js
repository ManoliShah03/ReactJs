import './App.css';

function App() {
    return (
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src="logo.png"/>
                    </div>
                    <li><a href="#web">Web Technology</a></li>
                    <li><a href="#program">C Programming</a></li>
                    <li><a href="#course">Courses</a></li>
                </ul>

                <div className="rightNav">
                    <input type="text" name="search" id="search"/>
                    <button className="btn btn-sm">Search</button>
                </div>
            </nav>

            <section className="firstsection">
                <div className="box-main">
                    <div className="firstHalf">
                        <h1 className="text-big" id="web">
                            Web Technology
                        </h1>

                        <p className="text-small">
                            HTML stands for HyperText Markup Language. It is used to design web pages using a markup
                            language.
                            HTML is the combination of Hypertext and Markup language. Hypertext defines the link between
                            the web
                            pages. A markup language is used to define the text document within tag which defines the
                            structure of
                            web pages. HTML is a markup language that is used by the browser to manipulate text, images,
                            and other
                            content to display it in the required format.
                        </p>


                    </div>
                </div>
            </section>

            <section className="secondsection">
                <div className="box-main">
                    <div className="secondHalf">
                        <h1 className="text-big" id="program">
                            C Programming
                        </h1>
                        <p className="text-small">
                            C is a procedural programming language. It was initially developed by Dennis Ritchie as a
                            system programming
                            language to write operating system. The main features of C language include low-level access
                            to memory, simple set
                            of keywords, and clean style, these features make C language suitable for system programming
                            like operating system
                            or compiler development.
                        </p>

                    </div>
                </div>
            </section>

            <footer className="background">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>

            </footer>
        </div>

    );
}

export default App;
