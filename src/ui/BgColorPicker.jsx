import { useEffect } from "react";
import { TwitterPicker } from "react-color";
import $ from "jquery";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Icon } from "@iconify/react";

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
    false
  );

  // tutorial for color picker
  const [colorPickerTutorial, setColorPickerTutorial] = useLocalStorage(
    "colorPickerTutorial",
    true
  );

  useEffect(
    function () {
      $("body").css("background-color", bgColor);
      // document.documentElement.style.setProperty("--scrollbar-color", bgColor);
    },
    [bgColor, style]
  );

  function handleChangeColor(color) {
    setBgColor(color.hex);
  }

  function handleButtonClick() {
    setDisplayColorPicker((display) => !display);
    setColorPickerTutorial(false);
  }

  return (
    <>
      <div className="absolute text-right top-5 right-3">
        <div
          onClick={handleButtonClick}
          className="inline-block p-1 md:p-1.5 hover:scale-105 shadow-md cursor-pointer w-min bg-slate-50"
        >
          <div
            className="w-8 h-5 rounded-sm sm:w-12 sm:h-7 md:w-16 md:h-8"
            style={{ backgroundColor: bgColor }}
          ></div>
        </div>

        {colorPickerTutorial ? (
          <div
            color={bgColor}
            className="flex items-center p-2 my-2 rounded-md bg-cyan-50"
          >
            Change theme color!&nbsp;
            <Icon icon="akar-icons:pointer-hand" />
          </div>
        ) : null}

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
    </>
  );
}

export default BgColorPicker;
