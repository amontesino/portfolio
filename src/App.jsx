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
import { LightModeProvider } from "./context/LightModeContext";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

console.log(LightModeProvider)

function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const location = useLocation();

  return (
    <LightModeProvider>
      <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
      </AnimatePresence>
    </LightModeProvider>
  );
}

export default App;
