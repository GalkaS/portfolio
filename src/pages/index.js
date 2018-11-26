import React from "react";
import Header from "../components/header";
// import Footer from "../components/footer";
import ProjectsList from "../components/ProjectsList";
import "normalize.css"
import "./index.css";
import projects from "../../data/projects-info";

const New = () => {
  console.log(projects[0]);
  return (
    <div className="container background">
      <div className="header">
        <Header text="Hi! I'm Gala - a Web Developer with QA background." />
      </div>
      <div className="content">
        <ProjectsList projects={projects}/>
      </div>
      <div className="imageCredit">
      <a className="linksCredit" href="https://www.freepik.com/free-photos-vectors/background">Background vector source</a>
      <a className="linksCredit" href="https://www.flaticon.com"> Icons source</a>
      </div>
    </div>
  );
};

export default New;





