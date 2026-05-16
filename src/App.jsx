import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';  // Add this
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="gradient-bg"></div>
      <div className="noise-bg"></div>
      <Header />
      <Hero />
      <About />
      <Education />  {/* Add this line */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;