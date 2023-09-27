import Skill from "../ui/Skill";
import skillsList from "../data/skillsList.json";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useLocalStorage } from "@uidotdev/usehooks";
import hexToComplimentary from "../utils/hexToComplimentary";

function Skills() {
  const [itemList, setItemList] = useLocalStorage("skillsList", skillsList);

  // get complimentary color for skills
  // const [bgColor] = useLocalStorage("bgColor");
  const skillBgColor = hexToComplimentary("#27272a");

  // Function to update list on drop
  const handleDrop = (droppedSkill) => {
    if (!droppedSkill.destination) return;
    var updatedList = [...itemList];
    const [reorderedItem] = updatedList.splice(droppedSkill.source.index, 1);
    updatedList.splice(droppedSkill.destination.index, 0, reorderedItem);
    setItemList(updatedList);
  };

  return (
    <div className="px-8 py-32 overflow-hidden bg-zinc-800 text-zinc-800 sm:py-44 md:py-60 sm:px-12 md:px-16">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container" direction="horizontal">
          {(provided) => (
            <div
              className="flex flex-row flex-wrap items-center justify-center gap-5 "
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable key={item.title} draggableId={item.title} index={index}>
                  {(provided) => (
                    <div
                      className="h-auto w-max "
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <Skill bgColor={skillBgColor} el={item} key={item.title} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Skills;
