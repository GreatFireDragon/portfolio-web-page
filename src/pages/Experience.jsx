import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MyVerticalTimelineElement from "../ui/MyVerticalTimelineElement";
import { Icon } from "@iconify/react";

function Experience() {
  const style = window.getComputedStyle(document.documentElement);
  var whiteColor = style.getPropertyValue("--color-white");
  var accentColor = style.getPropertyValue("--color-accent");

  return (
    <section className="px-10 bg-cyan-100 ">
      <VerticalTimeline>
        <MyVerticalTimelineElement
          bgColor={accentColor}
          textColor={whiteColor}
          icon={""}
          title="Creative Director"
        />
        <MyVerticalTimelineElement />
        <MyVerticalTimelineElement />
        <VerticalTimelineElement
          iconStyle={{ background: accentColor, color: whiteColor }}
          icon={<Icon icon="mdi:code" />}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
