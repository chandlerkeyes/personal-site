import React from 'react';
import { ASSETS } from "../../assets/";
import './styles.scss';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-me-container">
          <img className="header-image" src={ASSETS.ABOUT_ME} alt="About Me Image" />
          <h3 className="header-title">About Me</h3>
          <div className="about-me-navigation">
            <button>Summary</button>
            <button>Work Experience</button>
            <button>Education</button>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default About;
