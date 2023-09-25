function Footer() {
  return (
    <footer className="flex flex-col items-center py-7 bg-slate-900 text-slate-100">
      <span className="flex items-center justify-center mb-2 uppercase ">
        Kuleshov Mikahil &copy; 2023{" "}
        {new Date().getFullYear() !== 2023 && `- ${new Date().getFullYear()}`}
      </span>
      <span className="text-xs opacity-30">
        inpired by&nbsp;
        <a href="https://dorota1997.github.io/react-frontend-dev-portfolio/">
          Davina Griss
        </a>
      </span>
    </footer>
  );
}

export default Footer;
