import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="c-left-text">
          <span>Get in touch</span>
          <span>with me</span>
        </div>
      </div>
      <div className="c-right">
        <form action="">
          <div className="input-group">
            <input type="text" name="user_name" className="user username" />
            <label htmlFor="user_name" className="input_label">
              Name
            </label>
          </div>
          <div className="input-group">
            <input type="email" name="user_email" className="user" />
            <label htmlFor="user_email" className="input_label">Email</label>
          </div>
          <div className="input-group">
          <textarea name="message" className="user" />
          <label htmlFor="message" className="input_label">Message</label>
          </div>
          <button type="submit" value="send" className="f-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
