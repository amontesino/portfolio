import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l3o5jdn", "template_rzsytqc", form.current, {
        publicKey: "XOndqY1C3UtK6BrYS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="email-form" ref={form} onSubmit={sendEmail}>
      <div className="name-and-email">
        <input
          className="email-small-field"
          type="text"
          name="to_name"
          placeholder="Name"
        />
        <input
          className="email-small-field"
          type="email"
          name="reply_to"
          placeholder="Email Address"
        />
      </div>
      <div className="message-and-button">
        <textarea
          className="email-message"
          name="message"
          placeholder="Message"
        />
        <button className="email-send">Send</button>
      </div>
    </form>
  );
}
