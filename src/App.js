import React from "react";
import { NavLink as Link, Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="nav-top">
        <nav className="nav">
          <div>
            <Link
              style={{ textDecoration: "none", color: "var(--font)" }}
              to="/"
              end
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "var(--font)" }}
              to="/projects"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "var(--font)" }}
              to="/about"
            >
              About
            </Link>
          </div>
        </nav>
      </div>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects/*" element={<Projects />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export const About = () => {
  return (
    <div className="about">
      This is the page where you put details about yourself
    </div>
  );
};

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
