import { Icon } from "@iconify/react";

function Skill(props) {
  const { el } = props;

  return (
    <span className="relative flex flex-col items-center px-3 py-2 transition-all box rounded-xl bg-amber-500">
      <span className="text-5xl sm:text-6xl md:text-9xl">
        <Icon icon={el.icon}></Icon>
      </span>
      <p className="text-xs sm:text-base md:text-2xl">{el.title}</p>
    </span>
  );
}

export default Skill;
