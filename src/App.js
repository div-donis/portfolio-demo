import React, { useEffect, useState } from "react";
import { NavLink as Link, Route, Routes, Navigate } from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";

const App = () => {
  const [small, setSmall] = useState();

  useEffect(() => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  }, []);

  window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  });

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
          <Route
            exact
            path="/"
            element={
              small ? (
                <>
                  <Home />
                  <Projects />
                  <About />
                </>
              ) : (
                <Home />
              )
            }
          ></Route>
          <Route
            path="/about"
            element={small ? <Navigate to="/" /> : <About />}
          ></Route>
          <Route
            path="/projects"
            element={small ? <Navigate to="/" /> : <Projects />}
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="about">
      This is the page where you put details about yourself
    </div>
  );
};

export default App;
