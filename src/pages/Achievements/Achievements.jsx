import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import Lightbox from "react-spring-lightbox";
import { useKeyPress } from "../../utils/useKeyPress";
import { Icon } from "@iconify/react";
import styles from "./Achievements.module.css";

const images = [
  {
    src: "/sertificate-EPT.png",
    loading: "lazy",
    title: "English level setificate B2 ",
  },
  {
    src: "/sertificate-JS.png",
    loading: "lazy",
    title: "JavaScript Sertificate",
  },
  {
    src: "/sertificate-profka2.png",
    loading: "lazy",
    title: "1C:Technology Professional",
  },
  {
    src: "/sertificate-profka.png",
    loading: "lazy",
    title: "1C:Professional",
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
      <h1 className="pb-10 text-4xl font-bold tracking-widest text-center uppercase md:pb-32 sm:pb-20 text-zinc-800">
        Sertificates
      </h1>

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

      <section className="flex flex-row flex-wrap items-center justify-around gap-3 ">
        {images.map((img) => (
          <div key={img.title} className={styles.box}>
            <div className="flex flex-row flex-wrap justify-center w-64 gap-3 py-3 rounded-md md:w-96 sm:rounded-2xl sm:px-4 sm:py-5 bg-zinc-800">
              <img
                className="object-cover h-48 md:h-72  w-[100%] cursor-zoom-in"
                src={img.src}
                alt={img.title}
                onClick={() => {
                  setOpenImage(true);
                  setCurrentIndex(images.indexOf(img));
                }}
              />
              <span
                style={{ color: bgColor }}
                className="text-sm text-center break-words sm:text-base md:text-lg"
              >
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Achievements;
