import React from "react";
import Email from "../components/Email";
import { Link, NavLink } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { GitHubSVG, LinkedInSVG } from "../assets/svg-icons";

export default function Contact() {
  return (
    <AnimatedPage>
      <main className="page-section">
        <h1 className="page-head">Contact</h1>
        <section className="email-and-info-container">
          <div className="contact-info">
            <h1>Let's get in touch!</h1>
            <p>
              I'd love to hear from you, whether it's to discuss projects,
              collaborations, or even if you have a coding question!
            </p>
            <p>I can also be found on:</p>
            <div className="contact-link-container">
              <NavLink
                className="contact-link black"
                to="https://www.linkedin.com/in/armandomontesino98"
              >
                <LinkedInSVG />
              </NavLink>
              <NavLink
                className="contact-link black"
                to="https://www.github.com/amontesino"
              >
                <GitHubSVG />
              </NavLink>
            </div>
          </div>
          <Email />
        </section>
      </main>
    </AnimatedPage>
  );
}
