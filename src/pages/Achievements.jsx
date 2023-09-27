import { useLocalStorage } from "@uidotdev/usehooks";

function Achievements() {
  const [bgColor] = useLocalStorage("bgColor");

  return <section style={{ backgroundColor: bgColor }} className="py-32 "></section>;
}

export default Achievements;
