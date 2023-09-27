import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import BgColorPicker from "./ui/BgColorPicker";
import GithubCorner from "./ui/GithubCorner";

function App() {
  return (
    <>
      <GithubCorner />
      <BgColorPicker />
      <Header />

      <Home />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Experience />

      <Footer />
    </>
  );
}

export default App;
