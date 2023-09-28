import { useCopyToClipboard, useLocalStorage } from "@uidotdev/usehooks";
import styles from "./ProfileCard.module.css";
import TextExpander from "./TextExpander";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProfileCard({ className }) {
  const [bgColor] = useLocalStorage("bgColor");
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyToClipboard = (e) => {
    copyToClipboard(e.target.innerText);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };

  return (
    <div
      className={`${styles.box} rounded-3xl  sm:scale-110 md:scale-150 md:mt-36 ${className}`}
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="flex flex-col items-center justify-center px-5 py-3 text-center md:px-16 md:py-10 "
      >
        <LazyLoadImage
          className="object-cover w-48 h-48 rounded-3xl"
          alt="ProfileImg"
          src="/resume_pic.png"
          placeholderSrc="/small/resume_pic.png"
        />
        <div className="w-48 ">
          <div className="font-bold uppercase">Kuleshov Mikhail</div>
          <div className="">Web Developer</div>
        </div>
        <div className="mt-4 text-sm italic w-72 text-zinc-600">
          <TextExpander collapsedNumWords={15}>
            In recent months, I&apos;ve been on an exciting journey into web development.
            I&apos;ve been diving into technologies like ReactJS building SPAs, exploring
            the world of front-end development. It&apos;s been an incredible learning
            experience, and I&apos;m eager to continue growing in this dynamic field.
          </TextExpander>
        </div>
        <div
          style={{ color: bgColor }}
          onClick={handleCopyToClipboard}
          className="relative px-4 py-3 my-5 rounded-lg cursor-pointer bg-zinc-800"
        >
          <span className="flex items-center justify-between">
            kulmike2002@gmail.com&nbsp;
            <Icon icon="clarity:copy-to-clipboard-line" />
          </span>
        </div>
        {copiedText && (
          <div
            className={`absolute px-2 py-3 pointer-events-none transition-all duration-1000 text-xs rounded-lg bottom-20  ${
              showCopied ? "opacity-100" : "opacity-0 "
            } bg-slate-200`}
          >
            Copied to clipboard
          </div>
        )}
      </div>
    </div>
  );
}
