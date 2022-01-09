import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";

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
  let ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="polymr">
      <div id="left-arrow">
        <MdOutlineKeyboardArrowLeft onClick={() => scroll(-1160)} />
      </div>
      <div className="project-slider" ref={ref}>
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
      <div id="right-arrow">
        <MdOutlineKeyboardArrowRight onClick={() => scroll(+1160)} />
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
