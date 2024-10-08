import AnimatedPage from "../AnimatedPage";

export default function Home() {
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
