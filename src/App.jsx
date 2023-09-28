import Footer from "./ui/Footer";
import Header from "./ui/Header";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience";
import BgColorPicker from "./ui/BgColorPicker";
import GithubCorner from "./ui/GithubCorner";
import Achievements from "./pages/Achievements/Achievements";
import EmojiPicker from "./ui/EmojiPicker";

function App() {
  return (
    <>
      <GithubCorner />
      <EmojiPicker />
      <BgColorPicker />
      <Header />

      <About />
      <Achievements />
      <Skills />
      <Experience />

      <Footer />
    </>
  );
}

export default App;
