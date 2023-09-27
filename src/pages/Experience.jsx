import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import $ from "jquery";

import IconByTitle from "../ui/IconByTitle";
import TextToTags from "../ui/TextToTags";
import { Icon } from "@iconify/react";
import { useLocalStorage } from "@uidotdev/usehooks";

function Experience() {
  const style = window.getComputedStyle(document.documentElement);
  var whiteColor = style.getPropertyValue("--color-white");
  const [bgColor] = useLocalStorage("bgColor");

  function handleSubtextToggle(e) {
    const subtextElement = $(e.target)
      .closest(".vertical-timeline-element-content")
      .find(".subtext");
    if (subtextElement.length > 0) {
      subtextElement.toggle();
    }
  }

  return (
    <section className="px-10 ">
      <VerticalTimeline lineColor={whiteColor} className="pt-20">
        <VerticalTimelineElement
          iconStyle={{ color: bgColor }}
          icon={<Icon icon="fluent:design-ideas-20-filled" />}
          iconClassName="timeline-icon"
          date="2020 — Present"
          dateClassName="timeline-date"
          onTimelineElementClick={(e) => handleSubtextToggle(e)}
          className="cursor-pointer"
        >
          <h3 className="timeline-h3">University</h3>
          <h4 className="subtext timeline-h4">
            Studied interface design, color theory, and corporate branding
          </h4>
          <TextToTags text="Design, User Experience, Visual Design" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ color: bgColor }}
          icon={<IconByTitle title="1C" />}
          iconClassName="timeline-icon"
          date="2022 — 2023"
          dateClassName="timeline-date"
          onTimelineElementClick={(e) => handleSubtextToggle(e)}
        >
          <h3 className="timeline-h3">1С programmer</h3>
          <h4 className="subtext timeline-h4">
            1C Software Developer, Professional in Technical Solutions
          </h4>
          <TextToTags text="SQL, 1C, transactions, acid, DataBases" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ color: bgColor }}
          icon={<IconByTitle title="React" />}
          iconClassName="timeline-icon"
          date="2023 — present"
          dateClassName="timeline-date"
          onTimelineElementClick={(e) => handleSubtextToggle(e)}
        >
          <h3 className="timeline-h3">React intusiast</h3>
          <h4 className="subtext timeline-h4">
            Javascript, React, Redux and other frontend libraries
          </h4>
          <TextToTags text="JS, React, SPA, frontend,  Tailwind" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ color: bgColor }}
          icon={<Icon icon="healthicons:question-outline" />}
          iconClassName="timeline-icon"
          date={`${new Date().toLocaleDateString()} — Your team?`}
          dateClassName="timeline-date"
          onTimelineElementClick={(e) => handleSubtextToggle(e)}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
