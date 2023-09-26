import { Icon } from "@iconify/react";
import skillsList from "../data/skillsList.json";

function IconByTitle({ title }) {
  const skill = skillsList.find(
    (item) => item.title.toUpperCase() === title.toUpperCase()
  );
  const icon = skill ? skill.icon : null;

  return <Icon icon={icon} />;
}

export default IconByTitle;
