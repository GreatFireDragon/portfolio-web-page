import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import Lightbox from "react-spring-lightbox";
import { useKeyPress } from "../utils/useKeyPress";
import { Icon } from "@iconify/react";

const images = [
  {
    src: "/sertificate-EPT.png",
    loading: "lazy",
    title: "Сертификат уровень английского",
  },
  {
    src: "/sertificate-JS.png",
    loading: "lazy",
    title: "Сертификат JavaScript",
  },
  {
    src: "/sertificate-profka2.png",
    loading: "lazy",
    title: "1C:Профессионал по технологическим вопросам",
  },
  {
    src: "/sertificate-profka.png",
    loading: "lazy",
    title: "1C:Профессионал",
  },
];

function Achievements() {
  const [bgColor] = useLocalStorage("bgColor");
  const [openImage, setOpenImage] = useState(false);

  const escPressed = useKeyPress("Escape");

  useEffect(() => {
    if (escPressed) {
      handleClose;
    }
  }, [escPressed]);

  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length && setCurrentIndex(currentImageIndex + 1);

  function handleClose() {
    setOpenImage(false);
  }

  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="px-8 py-10 sm:px-14 sm:py-20 md:px-20 md:py-32 "
    >
      <Lightbox
        isOpen={openImage}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        // renderHeader={() => {}}
        // renderFooter={() => (<CustomFooter />)}
        // renderPrevButton={() => (<CustomLeftArrowButton />)}
        // renderNextButton={() => (<CustomRightArrowButton />)}
        renderImageOverlay={() => {
          return (
            <span
              style={{ color: bgColor }}
              className="absolute text-5xl transition-all cursor-pointer md:text-4xl sm:text-3xl top-3 right-3 sm:hover:scale-150"
              onClick={handleClose}
            >
              <Icon icon="simple-line-icons:close" />
            </span>
          );
        }}
        className=""
        onClose={handleClose}
        singleClickToZoom
      />
      <section className="flex flex-row flex-wrap items-center justify-around gap-3 grow-0 basis-auto ">
        {images.map((img) => (
          <div
            className="px-4 py-3 cursor-pointer bg-zinc-800 rounded-2xl"
            key={img.title}
          >
            <img src={img.src} alt={img.title} onClick={() => setOpenImage(true)} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default Achievements;
