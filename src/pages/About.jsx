import AboutText from "../components/AboutText";
import ProfileCard from "../components/ProfileCard";

function About() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-slate-50">
      <h1 className="pb-20 text-4xl uppercase">About me</h1>
      <div className="flex flex-row flex-wrap items-center justify-around gap-10">
        <ProfileCard className="scale-100" />
        <AboutText />
      </div>
    </section>
  );
}

export default About;
