import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('modal--open', isModalOpen);
  }, [isModalOpen]);

  return (
    <Router>
      <NavBar toggleModal={toggleModal}/>
      {isModalOpen && <Contact closeModal={toggleModal} />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/activities" element={<Activities/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
