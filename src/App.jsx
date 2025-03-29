import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import "./App.css";
import Carousel from "./components/demo";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
