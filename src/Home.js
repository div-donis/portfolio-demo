import React from "react";
import Blog from "./Blog";
import Avi from "./Avi";

const Home = () => {
  return (
    <div className="home">
      <h1>Donovan Odom</h1>
      <h2>FullStack Web Developer</h2>
      <div className="home-flex">
        <Blog />
        <Avi />
      </div>
    </div>
  );
};

export default Home;
