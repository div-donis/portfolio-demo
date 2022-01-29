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
      <div className="about-container">
        <h1>Portrait</h1>
        <p>
          Thank you for visiting my portfolio! My name is Donovan, or Don- I’m a
          FullStack web developer that specializes in React, JavaScript & Redux
          frontend & Ruby/RoR backend. I enjoy organizing ways to make web
          development for efficient, coordinating innovative & communicative
          ways to meet client arrangements & most of all, building projects and
          implementing new technologies to challenge myself as a developer.
          <br />
          <br />
          As a future Alumni of Flatiron school for Computer Software
          Engineering (Graduating Feb 2022), I am looking forward to advancing
          my career and implementing my skills the tech industry, as well as
          furthering my education in the field & being a resource for others who
          have a passion for tech.
          <br />
          <br />
          I’ve worked as a freelance audio-engineer, producer & artist for the
          past 10 years and in various Medical Laboratory roles for the past 7
          years beginning in St. louis, MO and now in Seattle, WA. To contact
          me, Please email <div id="email">donovan-odom@outlook.com</div>.
        </p>
      </div>
    </div>
  );
};

export default App;
