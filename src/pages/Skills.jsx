import { Icon } from "@iconify/react";

const skills = [
  { title: "mySql", icon: "mdi:database" },
  { title: "React", icon: "mdi:react" },
  { title: "Node", icon: "mdi:nodejs" },
  { title: "HTML", icon: "tabler:brand-html5" },
  { title: "CSS", icon: "tabler:brand-css3" },
  { title: "JavaScript", icon: "tabler:brand-javascript" },
  { title: "Git", icon: "mdi:git" },
  { title: "Figma", icon: "iconoir:figma" },
  { title: "Tailwind", icon: "mdi:tailwind" },
  { title: "1C:Enterprise", icon: "file-icons:1c" },
  { title: "React Router", icon: "simple-icons:reactrouter" },
  { title: "Redux Toolkit", icon: "akar-icons:redux-fill" },
  { title: "React Query", icon: "simple-icons:reactquery" },
  { title: "Rest API", icon: "dashicons:rest-api" },
];

function Skills() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 px-10 bg-zinc-800 text-zinc-800 py-60">
      {skills.map((el) => (
        <span
          key={el.title}
          className="flex flex-col items-center px-3 py-2 rounded-xl bg-cyan-50">
          <span className="text-5xl">
            <Icon icon={el.icon}></Icon>
          </span>
          <p>{el.title}</p>
        </span>
      ))}
    </div>
  );
}

export default Skills;
