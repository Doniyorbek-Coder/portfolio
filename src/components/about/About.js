import React, { Component } from "react";
import "./AboutStyle.css";
import Title from "../Title";
import ImageSection from "./utils/ImageSection";
import SkillsSection from "./utils/SkillsSection";
import ServiceSection from "./utils/ServiceSection";
import design from "../../img/design.svg";
import intelligence from "../../img/intelligence.svg";
import gamedev from "../../img/game-dev.svg";

class About extends Component {
  render() {
    return (
      <>
        <div className="AboutPage">
          <Title title={"About Me"} span={"About Me"} />
          <ImageSection />
          <Title title={"My Skills"} span={"My Skills"} />
          <div className="skillsContainer">
            <h2>Frontend</h2>
            <br />
            <SkillsSection skill={"HTML"} progress={"70%"} width={"70%"} />
            <SkillsSection skill={"CSS"} progress={"60%"} width={"60%"} />
            <SkillsSection
              skill={"JavaScript"}
              progress={"70%"}
              width={"70%"}
            />
            <SkillsSection skill={"React JS"} progress={"70%"} width={"70%"} />
          </div>
          <Title title={"Services"} span={"Services"} />
          <div className="services-container">
            <ServiceSection
              image={gamedev}
              title={"Frontend development"}
              utils={"Frontend skills"}
              text={
                "Html5, Css3, Bootstrap4, Sass, JavaScript, React JS, Axios, Redux, GIT (Github, GitLab)"
              }
            />
          </div>
        </div>
      </>
    );
  }
}

export default About;
