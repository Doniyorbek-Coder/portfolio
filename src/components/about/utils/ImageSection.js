import React from "react";
import about from "../../../img/about1.jpg";

function ImageSection() {
  return (
    <>
      <div className="ImageSection">
        <div className="img">
          <img src={about} alt="About Image" />
        </div>
        <div className="about-info">
          <h4>
            I am <span>Doniyorbek Asqaraliyev</span>
          </h4>
          <h6 className="about-text">
            I am Doniyorbek Asqaraliyev, 22 years old, my interest in
            programming started at the age of 14 in Pascal programming language.
            I am mainly interested in data structure and algorithms, my goals
            are self-study and big projects using new technologies. At the
            current time, I am Frontend developer!!!
          </h6>
          <div className="about-details">
            <div className="left-section">
              <h6>Full Name</h6>
              <h6>Age</h6>
              <h6>Languages</h6>
              <h6>Address</h6>
              <h6>Country</h6>
            </div>
            <div className="right-section">
              <h6> : Doniyorbek Asqaraliyev</h6>
              <h6> : 22 </h6>
              <h6> : English, Uzbek, Russian</h6>
              <h6> : Tashkent</h6>
              <h6> : Uzbekistan</h6>
            </div>
          </div>
          <button className="btn">
            <h5>
              <a
                className={"resume-link"}
                target={"_blank"}
                href={
                  "https://github.com/Doniyorbek-Coder/My_Cv/blob/main/Doniyorbek's%20Resume.pdf"
                }
              >
                My CV is on github
              </a>
            </h5>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageSection;
