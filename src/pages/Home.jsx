import React, { useContext } from "react";
import AnimatedPage from "../AnimatedPage";
import { ThemeContext } from "../App";

export default function Home() {

  const theme = useContext(ThemeContext)

  return (
    <AnimatedPage>
      <main className="page-section home">
        <h2 className="home-head mobile-hidden">Armando Montesino</h2>
        <h2 className="home-body">
          A front end <span className="js-text">JavaScript</span> developer
          specializing in <span className="react-text">React.</span>
        </h2>
      </main>
    </AnimatedPage>
  );
}
