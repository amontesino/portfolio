import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      // className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen"
    >
      <header className="bg-blue-300 dark:bg-blue-600 px-2 h-10 w-full top-0 fixed flex items-center">
        <h1>Armando Montesino</h1>
        <Menu className="fixed right-2" />  
      </header>
      <main className="mt-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section
          className="bg-blue-200 dark:bg-blue-800 w-full m-0 h-50 px-2 text-5xl block"
          id="intro-header"
        >
          <h2>Fullstack Developer specializing in Next.js</h2>
        </section>
        <section
          id="about"
        >
          <h3>Hello!</h3>
          <p>
          I'm <span className="strong">Armando Montesino.</span> I am a frontend
          developer with over a year of bootcamp and amateur experience after
          gaining my Communications Bachelor's and Master's degrees. If you're
          looking to hire me,{" "}
          <Link className="body-link" href={"/"}>
            let's talk!
          </Link>
        </p>
        </section>
      </main>
    </div>
  );
}
