import { VerticalTimelineElement } from "react-vertical-timeline-component";

function MyVerticalTimelineElement({ bgColor, textColor }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: bgColor, color: textColor }}
      contentArrowStyle={{ borderRight: `7px solid  ${bgColor}` }}
      date="2011 - present"
      iconStyle={{ background: bgColor, color: textColor }}>
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team
        Leading
      </p>
    </VerticalTimelineElement>
  );
}

export default MyVerticalTimelineElement;
