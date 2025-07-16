import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WorkSlider from "./components/WorkSlider";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Works from "./components/Works";

function Home() {
  // This is your homepage content
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkSlider />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {<Route path="/works" element={<Works />} />}
      </Routes>
    </Router>
  );
}

export default App;
