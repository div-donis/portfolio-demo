import React from "react";
import { useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-links">
        <h1>Polymr</h1>
      </div>
      <div>
        <Polymr />
      </div>
    </div>
  );
};

export const Polymr = () => {
  let ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const gifs = [
    "https://i.imgur.com/Qxv1Gys.gif",
    "https://i.imgur.com/GgCiUVY.gif",
    "https://i.imgur.com/31cWP6r.gif"
  ];

  return (
    <div className="polymr">
      <div id="left-arrow">
        <MdOutlineKeyboardArrowLeft onClick={() => scroll(-1160)} />
      </div>
      <div className="project-slider" ref={ref}>
        {gifs.map((gif) => (
          <img alt="polymr" className="polymr-gif" src={gif} />
        ))}
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
