import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Navbar />
      <About/>
      <Hero/>
     <Projects/>
     <Skills/>

    </div>
  );
}

export default App;
