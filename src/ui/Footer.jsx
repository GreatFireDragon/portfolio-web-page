function Footer() {
  return (
    <footer className="flex items-center justify-center py-7 bg-slate-900 text-slate-100">
      Kuleshov Mikahil &copy; 2023{" "}
      {new Date().getFullYear() !== 2023 && `- ${new Date().getFullYear()}`}
    </footer>
  );
}

export default Footer;
