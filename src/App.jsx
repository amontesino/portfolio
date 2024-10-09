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
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { createContext, useState } from "react";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const location = useLocation();
  const [lightMode, setLightMode] = useState(true);

  const LightModeContext = createContext();

  const toggleLightMode = () => {
    setLightMode(prevMode => !prevMode);
  };

  return (
    <>
      <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
        <Header />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path ="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </LightModeContext.Provider>
    </>
  );
}

export default App;
