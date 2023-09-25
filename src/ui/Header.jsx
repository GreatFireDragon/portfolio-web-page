import { TypeAnimation } from "react-type-animation";

function Header() {
  console.log(`height: ${window.innerHeight}px`);

  return (
    <header
      className="flex flex-col items-center justify-center bg-cyan-100"
      style={{ height: window.innerHeight }}>
      <span className="mb-5 text-6xl sm:text-8xl">🍕</span>
      <h1 className="text-2xl sm:text-4xl">Kuleshov Mikhail</h1>
      <p className="text-lg sm:text-2xl">
        <span>I&apos;m a&nbsp;</span>
        <TypeAnimation
          sequence={["Developer", 2000, "", 2000, "Designer", 2000]}
          speed={20}
          repeat={Infinity}
        />
      </p>
    </header>
  );
}

export default Header;
