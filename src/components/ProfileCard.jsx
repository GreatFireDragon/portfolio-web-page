import { useLocalStorage } from "@uidotdev/usehooks";

export default function ProfileCard({ className }) {
  // bgColor from local storage
  const [bgColor] = useLocalStorage("bgColor");

  return (
    <div className={className}>
      <div
        style={{ backgroundColor: bgColor }}
        className="flex flex-col items-center justify-center gap-8 px-16 py-10 rounded-3xl"
      >
        <img
          className="object-cover w-64 h-64 "
          alt="ProfileImg"
          src="/profile-card/img-20190402-082739-275.png"
        />
        <div className="">
          <div className="">
            <div className="">Joeylene Rivera</div>
            <div className="">Web Developer</div>
          </div>
          <p className="">I am a Web Developer</p>
        </div>
        <input className="" value="joeylenerivera@gmail.com" type="email" />
      </div>
    </div>
  );
}
