import Skill from "../ui/Skill";
import skills from "../data/skillsList.json";

function Skills() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-5 px-8 py-32 bg-zinc-800 text-zinc-800 sm:py-44 md:py-60 sm:px-12 md:px-16">
      {skills.map((el) => (
        <Skill el={el} key={el.title} />
      ))}
    </section>
  );
}

export default Skills;
