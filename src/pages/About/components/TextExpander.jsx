import { useState } from "react";
import TextExpanderButton from "./TextExpanderButton";

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#67c",
  expanded = false,
  className = "",
  children,
}) {
  const [isExtended, setIsExtended] = useState(!expanded);

  const expandButtonStyle = {
    color: buttonColor,
    cursor: "pointer",
    display: "inline",
    font: "inherit",
  };

  return (
    <div role="button" className={className}>
      {children.split(" ").splice(0, collapsedNumWords).join(" ")}
      {isExtended ? (
        <>
          {"... "}
          <TextExpanderButton
            onClick={() => setIsExtended(!isExtended)}
            textStyle={expandButtonStyle}
          >
            {expandButtonText}
          </TextExpanderButton>
        </>
      ) : (
        <>
          {" "}
          {children.split(" ").splice(collapsedNumWords).join(" ") + " "}
          <TextExpanderButton
            onClick={() => setIsExtended(!isExtended)}
            textStyle={expandButtonStyle}
          >
            {collapseButtonText}
          </TextExpanderButton>
        </>
      )}
    </div>
  );
}

export default TextExpander;
