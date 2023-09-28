// import GithubCorner from "./ui/GithubCorner";
// import EmojiPicker from "./ui/EmojiPicker";
// import BgColorPicker from "./ui/BgColorPicker";
// import Header from "./ui/Header";
// import About from "./pages/About/About";
// import Skills from "./pages/Skills/Skills";
// import Achievements from "./pages/Achievements/Achievements";
// import Experience from "./pages/Experience";
// import Footer from "./ui/Footer";

import { lazy, Suspense } from "react";

const GithubCorner = lazy(() => import("./ui/GithubCorner"));
const EmojiPicker = lazy(() => import("./ui/EmojiPicker"));
const BgColorPicker = lazy(() => import("./ui/BgColorPicker"));
const Header = lazy(() => import("./ui/Header"));
const About = lazy(() => import("./pages/About/About"));
const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Footer = lazy(() => import("./ui/Footer"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GithubCorner />
      <EmojiPicker />
      <BgColorPicker />
      <Header />

      <About />
      <Achievements />
      <Skills />
      <Experience />

      <Footer />
    </Suspense>
  );
}

export default App;
