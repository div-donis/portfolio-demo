import React from "react";
import { Routes, Link, Route } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <ul className="project-links">
        <li>
          <Link to="">polymr (beta)</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="" element={<Profile />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="polymr">
      <div className="project-slider">
        <img
          alt="polymr"
          className="polymr-gif"
          src="https://i.imgur.com/Qxv1Gys.gif"
        />
        <img
          alt="polymr"
          className="polymr-gif"
          src="https://i.imgur.com/GgCiUVY.gif"
        />
        <img
          alt="polymr"
          className="polymr-gif"
          src="https://i.imgur.com/31cWP6r.gif"
        />
      </div>
    </div>
  );
};
export const Orders = () => {
  return <></>;
};
export const Quotes = () => {
  return <></>;
};

export default Projects;
