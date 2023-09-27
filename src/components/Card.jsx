// import styles from "./Card.module.css";

function Card() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-80 h-72 bg-slate-200 rounded-2xl">
        <div className="z-10 overflow-hidden transition-all rounded-2xl hover:scale-105">
          <img
            href="#"
            src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
          />
        </div>
        <div className="p-2  z-5 top-5">
          <h3>This is content</h3>
          <p>My name hello everyone</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
