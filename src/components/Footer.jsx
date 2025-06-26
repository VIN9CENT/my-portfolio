const Footer = () => {
  return (
    <footer className="bg-[#12091b]">
      <section className="text-gray-400 text-sm py-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          &copy; {new Date().getFullYear()} Vincent Ochieng. All rights
          reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
