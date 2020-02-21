import React, { useState } from 'react';
import './styles.scss';
import { TRIANGLE } from '../../assets/triangle';

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = event => {
    setValue(event.target.value);
  };
  return { value, onChange: handleChange };
};


const Contact = () => {
  const firstName = useFormInput('')
  const email = useFormInput('')
  const message = useFormInput('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formParams = {
      firstName: firstName.value,
      email: email.value,
      message: message.value
    }

    fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(formParams),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      (response) => (response.json())
    ).then((response) => {
      if (response.status === 'success') {
        alert("Message Sent.");
      } else if (response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  return (
    <div className="contact">
      <div className="header">
        <h1>Let's Talk Business</h1>
      </div>
      <div className="contact-form-content">
        <div className="contact-info">
          <div className="contact-info-container">
            <h2>Feel free to reach out to me</h2>
            <p><b>LinkedIn: </b>https://www.linkedin.com/in/chandlerkeyes/</p>
            <p><b>ChandlerKnowsBest YouTube Channel: </b>https://www.linkedin.com/in/chandlerkeyes/</p>
            <p><b>CodingWithChandler YouTube Channel: </b>https://www.linkedin.com/in/chandlerkeyes/</p>
            <p><b>ThinkWithColor.com (Blog): </b>https://www.linkedin.com/in/chandlerkeyes/</p>
            <p><b>GitHub: </b>https://www.linkedin.com/in/chandlerkeyes/</p>
          </div>
        </div>
        <div className="contact-form-container">
        <div className="triangle">{TRIANGLE}</div>
          <form className="contact-form form" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value="First Name" onChange={firstName.onChange} />
            <input type="text" name="email" value="Email" onChange={email.onChange} />
            <textarea value="Message" onChange={message.onChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
