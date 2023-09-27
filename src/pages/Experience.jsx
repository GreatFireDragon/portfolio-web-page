import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import $ from "jquery";

import IconByTitle from "../ui/IconByTitle";
import TextToTags from "../ui/TextToTags";
import { Icon } from "@iconify/react";

function Experience() {
  const style = window.getComputedStyle(document.documentElement);
  var whiteColor = style.getPropertyValue("--color-white");
  // var accentColor = style.getPropertyValue("--color-accent");

  function handleSubtextToggle(e) {
    const subtextElement = $(e.target)
      .closest(".vertical-timeline-element-content")
      .find(".subtext");
    if (subtextElement.length > 0) {
      subtextElement.toggle();
    }
  }

  return (
    <section className="px-10 bg-cyan-100 ">
      <VerticalTimeline lineColor={whiteColor} className="py-32">
        <VerticalTimelineElement
          icon={<Icon icon="fluent:design-ideas-20-filled" />}
          iconClassName="timeline-icon"
          date="2020 — Present"
          dateClassName="timeline-date"
          onTimelineElementClick={(e) => handleSubtextToggle(e)}
          className="cursor-pointer"
        >
          <h3 className="timeline-h3">University GUPTD</h3>
          <h4 className="subtext timeline-h4">
            Studied interface design, color theory, and corporate branding
          </h4>
          <TextToTags text="Design, User Experience, Visual Design" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<IconByTitle title="1C" />}
          iconClassName="timeline-icon"
          date="2020 — Present"
          dateClassName="timeline-date"
          onTimelineElementClick={(e) => handleSubtextToggle(e)}
        >
          <h3 className="timeline-h3">1С programmer</h3>
          <h4 className="subtext timeline-h4">
            1C Software Developer, Professional in Technical Solutions
          </h4>
          <TextToTags text="SQL, 1C infostructure, transactions, solid, SKD" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
