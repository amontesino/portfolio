import {
  Routes,
  Route,
  useLocation,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const location = useLocation();

  const ThemeContext = createContext()

  return (
    <AnimatePresence mode="wait">
      <ThemeContext.Provider value="dark">
        <Routes key={location.pathname} location={location}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </AnimatePresence>
  );
}

export default App;
