import { useLocalStorage } from "@uidotdev/usehooks";
import ProfileCard from "./components/ProfileCard";

function About() {
  const [bgColor] = useLocalStorage("bgColor");

  return (
    <section className="flex flex-col items-center justify-center px-10 py-20 bg-zinc-800">
      <h1
        style={{ color: bgColor }}
        className="pb-20 text-4xl font-bold tracking-widest uppercase"
      >
        About me
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-around gap-10">
        <ProfileCard className="scale-100" />
      </div>
    </section>
  );
}

export default About;
