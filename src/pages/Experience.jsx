import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import IconByTitle from "../ui/IconByTitle";
import TextToTags from "../ui/TextToTags";

function Experience() {
  const style = window.getComputedStyle(document.documentElement);
  var whiteColor = style.getPropertyValue("--color-white");
  // var accentColor = style.getPropertyValue("--color-accent");

  const newIconStyle = {
    boxShadow: `0 0 0 4px ${whiteColor}`,
  };

  return (
    <section className="px-10 bg-cyan-100 ">
      <VerticalTimeline lineColor={whiteColor} className="py-32">
        <VerticalTimelineElement
          iconStyle={newIconStyle}
          icon={<IconByTitle title="React" />}
          iconClassName="bg-cyan-300 text-cyan-50 transition-all md:hover:scale-110 md:hover:scale-125"
          date="2020 - Present"
          dateClassName="text-base sm:text-xl md:text-2xl sm:translate-x-4"
          className="">
          <h3 className="text-base font-bold sm:text-lg md:text-xl">University GUPTD</h3>
          <TextToTags text="Design, User Experience, Visual Design" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
