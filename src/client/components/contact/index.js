import React from 'react';
import './styles.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
      <div className="header">
        <h1>Let's Talk!</h1>
      </div>
      <div className="contact-form-container">
        <div className="contact-form">
          <form action="" className="form">
            <input type="text" name="firstName" value="First Name"/>
            <input type="text" name="email" value="Email"/>
            <textarea value="Message"/>
            <input type="submit"/>
          </form>
        </div>
       </div>
      </div>
    );
  }
}

export default Contact;
