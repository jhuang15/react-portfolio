import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

//vvv Same as const App = () => { vvv
function App() {
  return (
    <>
    <Header />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
