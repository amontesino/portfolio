import { NavLink } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import {
  CssSVG,
  FirebaseSVG,
  HtmlSVG,
  JsSVG,
  ReactSVG,
  TsSVG,
  VueSVG,
} from "../assets/svg-icons";

export default function About() {
  return (
    <AnimatedPage>
      <main className="page-section">
        <h1 className="page-head">About</h1>
        <h2>Who am I?</h2>
        <p>
          I'm <span className="strong">Armando Montesino.</span> I am a frontend
          developer with over a year of bootcamp and amateur experience after
          gaining my Communications Bachelor's and Master's degrees. If you're
          looking to hire me,{" "}
          <NavLink className="body-link" to="../contact">
            let's talk!
          </NavLink>
        </p>
        <h2>What Code + Communications Brings</h2>
        <p>
          Simply put, my prior history with Communications and Journalism brings
          a unique level of understanding to the workplace. I am more than able
          to put myself in the shoes of both my clients and colleagues to
          understand the best course of action to continue a project.
          Collaborative coding is a lot more than just pulls and merge requests.
          It's about making a project your team is{" "}
          <span className="strong">proud</span> of, and making sure the journey
          there was one you'd <span className="strong">want</span> to repeat.
        </p>
        <h2>The Dev Part</h2>
        <p>My ever-growing tech stack includes:</p>
        <ul className="techstack-list">
          <li>
            <HtmlSVG />
          </li>
          <li>
            <CssSVG />
          </li>
          <li>
            <JsSVG />
          </li>
          <li>
            <TsSVG />
          </li>
          <li>
            <ReactSVG />
          </li>
          <li>
            <FirebaseSVG />
          </li>
          <li>
            <VueSVG />
          </li>
        </ul>
        <p>as well as being an avid proponent of these concepts:</p>
        <ul>
          <li>Responsive Design</li>
          <li>Accessibility</li>
          <li>GitHub & version control best practices</li>
          <li>Optimizing performance</li>
        </ul>
      </main>
    </AnimatedPage>
  );
}
