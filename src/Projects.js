import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <h1>Polymr</h1>
        <h2>React / Rails Project - collaboration center & task/bug tracker</h2>
        <a
          style={{ textDecoration: "none", color: "var(--font)" }}
          href="https://github.com/div-donis/polymr-beta"
        >
          https://github.com/div-donis/polymr-beta
        </a>
        <p>
          To launch this project in localhost, fork this repository then run:
          <br />
          <br />
          bundle install
          <br />
          <br />
          npm install --prefix client
          <br />
          <br />
          You can use the following commands to run the application:
          <br />
          <br />
          <ul>
            <li>rails s: run the backend on http://localhost:3000</li>
            <br />
            <li>
              npm start --prefix client: run the frontend on
              http://localhost:4000
            </li>
          </ul>
          <br />
          To seed the database run:
          <br />
          <br />
          rails db:migrate
          <br />
          <br />
          rails db:seed
          <br />
          <br />
          in the db directory, seeds.rb holds test user. You can use this
          information to log in:
          <br />
          <br />
          email: 'polymr@test.me' password: 'polymrtest1'
          <br />
          <br />
          This build is still in development. Feel free to contact me or make
          pull requests.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Projects;
