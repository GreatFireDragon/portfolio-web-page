import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <header
      className="flex flex-col items-center justify-center"
      style={{ height: window.innerHeight }}
    >
      <span className="mb-5 text-6xl sm:text-8xl md:text-10xl">
        <Icon icon="openmoji:construction" />
      </span>
      <h1 className="px-20 pb-10 text-2xl font-bold text-center sm:text-4xl">
        Site is under contsruction
      </h1>
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
