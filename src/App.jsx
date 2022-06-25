import Header from './components/header/Header';
//import { Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

//vvv Same as const App = () => { vvv
function App() {
  return (
    <>
    {/* <Routes>
      <Route exact path="/" element={<Header/>} />
      <Route path="/about-me" element={<About/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contact-me" element={<Contact/>} />
    </Routes> */}

    <Header />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;
