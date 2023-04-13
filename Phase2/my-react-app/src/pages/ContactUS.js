import React from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const formData = new FormData(e.target);
    axios
      .post('http://localhost/ReactJs/Phase2/my-react-app/php/saveForm.php', formData)
      .then((response) => {
        if (response.status === 200) {
          setFormStatus('Submitted');
        } else {
          setFormStatus('Error');
        }
      })
      .catch((error) => {
        console.error(error);
        setFormStatus('Error');
      });

    axios
      .post('http://localhost/ReactJs/Phase2/my-react-app/php/sendEmail.php', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-contact">
      <header className="head-contact">

        <img id="img-contactus" src="images/cus.png" alt="Contact Us" />
      </header>
      <div className="container my-4">
        <div className="contact-content">{/* Add your contact content here */}</div>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="fname">
              First Name
            </label>
            <input className="form-control" type="text" id="fname" name="fname" required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="lname">
              Last Name
            </label>
            <input className="form-control" type="text" id="lname" name="lname" required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input className="form-control" type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <input type="text" className="form-control" id="message" name="message" required />
          </div>

          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
