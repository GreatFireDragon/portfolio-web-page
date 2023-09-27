import Skill from "../ui/Skill";
import skillsList from "../data/skillsList.json";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Skills() {
  const [itemList, setItemList] = useState(skillsList);

  // set carousel css variables
  useEffect(() => {
    setTimeout(() => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const carouselWidth = document.getElementById("carousel-track").offsetWidth;
      document.documentElement.style.setProperty(
        `--carousel-track-width`,
        `-${carouselWidth}px`
      );
      document.documentElement.style.setProperty(
        `--windowRatio`,
        `${windowWidth / windowHeight}`
      );
    }, 1000);
  }, []);

  // Function to update list on drop
  const handleDrop = (droppedSkill) => {
    if (!droppedSkill.destination) return;
    var updatedList = [...itemList];
    const [reorderedItem] = updatedList.splice(droppedSkill.source.index, 1);
    updatedList.splice(droppedSkill.destination.index, 0, reorderedItem);
    setItemList(updatedList);
  };

  return (
    <div className="relative px-8 py-32 overflow-hidden bg-zinc-800 text-zinc-800 sm:py-44 md:py-60 sm:px-12 md:px-16">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container" direction="horizontal">
          {(provided) => (
            <div
              id="carousel-track"
              className="absolute flex flex-row items-center justify-center gap-5 overflow-hidden top-1/3 "
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
                      <Skill el={item} key={item.title} />
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

    // <section className="flex flex-row flex-wrap items-center justify-center gap-5 px-8 py-32 bg-zinc-800 text-zinc-800 sm:py-44 md:py-60 sm:px-12 md:px-16">
    //   {itemList.map((el) => (
    //     <Skill el={el} key={el.title} />
    //   ))}
    // </section>
  );
}

export default Skills;
