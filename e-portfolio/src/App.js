import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./utils/ThemeContext";
import { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("modal--open", isModalOpen);
  }, [isModalOpen]);

  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider>
        <Router>
          <NavBar check={darkMode} change={() => setDarkMode(!darkMode)} toggleModal={toggleModal} />
          {isModalOpen && <Contact closeModal={toggleModal} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
          <Footer />
        </Router>
    </ThemeProvider>
  );
}

export default App;
