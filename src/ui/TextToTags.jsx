function getRandomColor() {
  const colors = Object.keys(colorVariants);
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex].toLowerCase();
  return color;
}

const colorVariants = {
  amber: "bg-amber-400   text-amber-100",
  blue: "bg-blue-400    text-blue-100",
  emerald: "bg-emerald-400 text-emerald-100",
  fuchsia: "bg-fuchsia-400 text-fuchsia-100",
  green: "bg-green-400   text-green-100",
  indigo: "bg-indigo-400  text-indigo-100",
  lime: "bg-lime-400    text-lime-100",
  orange: "bg-orange-400  text-orange-100",
  pink: "bg-pink-400    text-pink-100",
  purple: "bg-purple-400  text-purple-100",
  red: "bg-red-400     text-red-100",
  rose: "bg-rose-400    text-rose-100",
  teal: "bg-teal-400    text-teal-100",
  violet: "bg-violet-400  text-violet-100",
  yellow: "bg-yellow-400  text-yellow-100",
};

function TextToTags({ text }) {
  const textArr = text.split(",");

  return (
    <p className="flex flex-wrap gap-1 md:gap-2 ">
      {textArr.map((el) => {
        const color = getRandomColor();

        return (
          <span
            className={`px-2 py-1 uppercase leading-[0.75rem] transition-all text-[0.6rem] hover:scale-110 hover:mx-2 sm:text-xs md:text-base rounded-full ${colorVariants[color]}`}
            key={el}>
            {el}
          </span>
        );
      })}
    </p>
  );
}

export default TextToTags;
