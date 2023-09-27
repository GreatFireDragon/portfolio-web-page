import { useEffect } from "react";
import { TwitterPicker } from "react-color";
import $ from "jquery";
import { useLocalStorage } from "@uidotdev/usehooks";

function BgColorPicker() {
  // get css root color
  const style = window.getComputedStyle(document.documentElement);
  const initialBgColor = style.getPropertyValue("--color-bg");

  const bgColorsList = [
    style.getPropertyValue("--color-bg"),
    style.getPropertyValue("--color-red"),
    style.getPropertyValue("--color-green"),
    style.getPropertyValue("--color-yellow"),
    style.getPropertyValue("--color-purple"),
  ];

  const [bgColor, setBgColor] = useLocalStorage("bgColor", initialBgColor);
  const [displayColorPicker, setDisplayColorPicker] = useLocalStorage(
    "displayColorPicker",
    true
  );

  useEffect(
    function () {
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
            colors={bgColorsList}
            onChangeComplete={handleChangeColor}
          />
        </div>
      ) : null}
    </div>
  );
}

export default BgColorPicker;
