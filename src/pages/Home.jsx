import React, { useContext } from "react";
import AnimatedPage from "../AnimatedPage";
import { LightModeContext } from "../context/LightModeContext";

export default function Home() {
  const {lightMode} = useContext(LightModeContext)
  const themeCheck = lightMode ? "light" : null

  return (
    <AnimatedPage>
      <main className={`page-section home ${themeCheck}`}>
        <h2 className={`home-head mobile-hidden ${themeCheck}`}>Armando Montesino</h2>
        <h2 className={`home-body ${themeCheck}`}>
          A front end <span className={`js-text ${themeCheck}`}>JavaScript</span> developer
          specializing in <span className={`react-text ${themeCheck}`}>React.</span>
        </h2>
      </main>
    </AnimatedPage>
  );
}
