import AnimatedPage from "../AnimatedPage";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="page-section home">
        <h2 className="home-head mobile-hidden">Armando Montesino</h2>
        <h2 className="home-body">
          A fullstack <span className="react-text">React</span> developer
          with a constantly evolving skillset.
        </h2>
      </main>
    </AnimatedPage>
  );
}
