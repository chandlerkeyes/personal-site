import React, { useState } from 'react';
import './styles.scss';

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

    console.log('form params: ', formParams);

    fetch('http://localhost:3002/send',{
        method: "POST",
        body: JSON.stringify(formParams),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent.");
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  return (
    <div className="contact">
      <div className="header">
        <h1>Let's Talk Business</h1>
      </div>
      <div className="contact-form-container">
        <form className="contact-form form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" name="firstName" {...firstName} />
          <label>Email</label>
          <input type="text" name="email" {...email} />
          <label>Message</label>
          <textarea value="Message" {...message} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
