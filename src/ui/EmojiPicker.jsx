import { useLocalStorage } from "@uidotdev/usehooks";
import { Icon } from "@iconify/react";
import themes from "../data/themes.json";

function EmojiPicker() {
  const [emoji, setEmoji] = useLocalStorage("emoji", 0);

  function handleButtonClick() {
    const newEmoji = emoji === themes.length - 1 ? 0 : emoji + 1;
    setEmoji(newEmoji);
  }

  return (
    <div
      onClick={handleButtonClick}
      className="absolute text-3xl cursor-pointer top-5 hover:scale-105 sm:text-4xl md:text-5xl sm:right-24 md:right-28 right-20"
    >
      <Icon icon={themes[emoji][0]} />
    </div>
  );
}

export default EmojiPicker;
