import { Icon } from "@iconify/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { TypeAnimation } from "react-type-animation";
import themes from "../data/themes.json";

function Header() {
  const [emoji] = useLocalStorage("emoji");

  return (
    <header
      className="flex flex-col items-center justify-center"
      style={{ height: window.innerHeight }}
    >
      <span className="mb-5 text-6xl sm:text-8xl md:text-10xl">
        <Icon
          icon={
            // get random emote
            themes[emoji][Math.floor(themes[emoji].length * Math.random())]
          }
        />
      </span>

      <h1 className="text-2xl sm:text-4xl md:text-6xl">Kuleshov Mikhail</h1>
      <p className="text-lg sm:text-2xl md:text-4xl">
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
