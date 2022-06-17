import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';

//vvv Same as const App = () => { vvv
function App() {
  return (
    <>
    <Routes>

      <Route exact path="/" element={<Header/>} />
      <Route path="/about-me" element={<About/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
    </>
  );
}

export default App;
