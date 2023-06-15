import React from 'react';

export default function ContactForm(props) {
  return (
    <div>
      <h1>Contact Me</h1>
    <br />
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="name"
          type="text"
          className="form-control"
          placeholder="Contact Name"
          id="name"
        />
        <br />
        <label htmlFor="email">Email Address:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="email"
          type="text"
          className="form-control"
          placeholder="Email Address"
          id="email"
        />
        <br />
        <label htmlFor="message">Message:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="message"
          type="text"
          className="form-control"
          placeholder="Message"
          id="message"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
}

