import React from 'react';
import { ASSETS } from "../../assets/";
import { COPY } from "../../assets/copy";
import './styles.scss';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = { buttonPressed: "SUM" };
  }

  renderSummary() {
    return <div className="summary">{COPY.SUMMARY}</div>
  }

  renderWorkExperience() {
    return <div className="work-experience">
    <table className="work-experience-table">
      <tr>
        <th>Job Title</th>
        <th>Year</th>
        <th>Description</th>
      </tr>
      <tr className="colored-table-row">
        <td>Interaction Gaming</td>
        <td>2018-10</td>
        <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</td>
      </tr>
      <tr>
        <td>Hello World</td>
        <td>2017-11 - 2018-10</td>
        <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</td>
      </tr>
      <tr className="colored-table-row">
        <td>Front End Intern</td>
        <td>2017-09 - 2017-10</td>
        <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</td>
      </tr>
    </table>
    </div>
  }

  renderEducation() {
    return <div className="education">
    <table className="education-table">
      <tr>
        <th>School</th>
        <th>Year</th>
        <th>Description</th>
      </tr>
      <tr className="colored-table-row">
        <td>Grand Circus</td>
        <td>2017-06 - 2017-08</td>
        <td>Description</td>
      </tr>
      <tr>
        <td>Sichuan University</td>
        <td>2016-06 - 2016-07</td>
        <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</td>
      </tr>
      <tr className="colored-table-row">
        <td>Eastern Michigan University</td>
        <td>2014-09 - 2017-06</td>
        <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</td>
      </tr>
    </table>
    </div>
  }

  renderProjects() {
    return <div className="projects">
    <table className="projects-table">
      <tr>
        <th>Project Name</th>
        <th>Link</th>
        <th>Description</th>
      </tr>
      <tr>
        <td className="colored-table-row">Think With Color</td>
        <td>2018-10</td>
        <td>thinkwithcolor.com</td>
      </tr>
      <tr>
        <td>Weather Application w/ Node.js and Geocode</td>
        <td>2018-06</td>
        <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</td>
      </tr>
      <tr className="colored-table-row">
        <td>Pickup Time App</td>
        <td>2017-08</td>
        <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</td>
      </tr>
    </table>
    </div>
  }

  renderAboutMeContent() {
    switch(this.state.buttonPressed) {
      case "EXP":
        return this.renderWorkExperience();
      case "EDU":
        return this.renderEducation();
      case "PRO": 
        return this.renderProjects();
      case "SUMMARY":
      default:
        return this.renderSummary();    
    }
  }

  render() {
    return (
      <div className="about">
        <div className="about-me-container">
          <img className="header-image" src={ASSETS.ABOUT_ME} alt="About Me Image" />
          <h3 className="header-title">About Me</h3>
          <div className="about-me-navigation">
            <button onClick={() => {
              this.setState({ buttonPressed: "SUM" });
            }}>Summary</button>
            <button onClick={() => {
              this.setState({ buttonPressed: "EXP" });
            }}>Work Experience</button>
            <button onClick={() => {
              this.setState({ buttonPressed: "EDU" });
            }}>Education</button>
            <button onClick={() => {
              this.setState({ buttonPressed: "PRO" });
            }}>Projects</button>
          </div>
          <hr/>
          <div className="about-me-content">
            {this.renderAboutMeContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
