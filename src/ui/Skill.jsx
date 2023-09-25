import { Icon } from "@iconify/react";

function Skill(props) {
  const { el } = props;

  return (
    <span className="flex flex-col items-center px-3 py-2 transition-all hover:scale-105 rounded-xl bg-cyan-50">
      <span className="text-5xl sm:text-6xl md:text-9xl">
        <Icon icon={el.icon}></Icon>
      </span>
      <p className="text-xs sm:text-base md:text-2xl">{el.title}</p>
    </span>
  );
}

export default Skill;
