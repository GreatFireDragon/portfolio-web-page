function Footer() {
  return (
    <footer className="flex flex-col items-center py-7 sm:py-10 md:py-14 bg-zinc-800 text-zinc-100 ">
      <span className="flex items-center justify-center mb-2 text-sm uppercase sm:text-base md:text-lg ">
        Kuleshov Mikahil &copy; 2023{" "}
        {new Date().getFullYear() !== 2023 && `- ${new Date().getFullYear()}`}
      </span>
      <span className="text-xs sm:text-sm md:text-base opacity-30">
        inpired by&nbsp;
        <a href="https://dorota1997.github.io/react-frontend-dev-portfolio/">
          Davina Griss
        </a>
      </span>
    </footer>
  );
}

export default Footer;
