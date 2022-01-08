import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { useState } from "react";

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
  const [sliderLoad, setSliderLoad] = useState("");

  const slider = document?.getElementById("polymr-left");

  const slide = (shift) => {
    setSliderLoad(slider);
    if (sliderLoad) {
      slider.scrollLeft += shift;
    }
  };

  console.log(slider);
  return (
    <div className="polymr">
      <div id="left-arrow" onClick={() => slide(-1240)}>
        {" "}
        {"<"}{" "}
      </div>
      <div className="project-slider" id="polymr-left">
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
      <div id="right-arrow" onClick={() => slide(+1240)}>
        {" "}
        {">"}{" "}
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
