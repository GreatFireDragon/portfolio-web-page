import { useEffect, useState } from "react";
import { TwitterPicker } from "react-color";
import $ from "jquery";

function BgColorPicker() {
  // get css root color
  const style = window.getComputedStyle(document.documentElement);
  const initialBgColor = style.getPropertyValue("--color-bg");

  const [bgColor, setBgColor] = useState(initialBgColor);
  const [displayColorPicker, setDisplayColorPicker] = useState(true);

  useEffect(
    function () {
      // jquery select body and change bg color
      $("body").css("background-color", bgColor);
    },
    [bgColor]
  );

  function handleChangeColor(color) {
    setBgColor(color.hex);
  }

  return (
    <div className="absolute text-right top-5 right-3">
      <div
        onClick={() => setDisplayColorPicker((display) => !display)}
        className="inline-block p-1 shadow-md cursor-pointer w-min bg-slate-50"
      >
        <div className="w-8 h-5 rounded-sm" style={{ backgroundColor: bgColor }}></div>
      </div>

      {displayColorPicker ? (
        <div className="my-5 z-2">
          <TwitterPicker
            triangle="top-right"
            width="200px"
            color={bgColor}
            colors={["#F47373", "#37D67A", "#2CCCE4", "#dce775", "#ff8a65"]}
            onChangeComplete={handleChangeColor}
          />
        </div>
      ) : null}
    </div>
  );
}

export default BgColorPicker;
