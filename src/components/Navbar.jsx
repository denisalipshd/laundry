import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-60 bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between bg-white">
        <a href="#beranda" className="z-70">
          <img src="img/logo.png" alt="Logo" className="h-12 md:h-16" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#beranda" className="hover:text-primary transition">
              Beranda
            </a>
          </li>
          <li>
            <a href="#layanan" className="hover:text-primary transition">
              Layanan
            </a>
          </li>
          <li>
            <a href="#harga" className="hover:text-primary transition">
              Harga
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-primary transition">
              FAQ
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-70 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none">
          <span className={`h-0.5 w-7 bg-gray-600 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-7 bg-gray-600 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-7 bg-gray-600 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <ul className={`md:hidden flex flex-col items-center gap-6 absolute left-0 w-full bg-white shadow-lg py-8 transition-all duration-500 ease-in-out -z-10 ${isOpen ? "top-20 opacity-100" : "-top-100 opacity-0"}`}>
          <li>
            <a onClick={() => setIsOpen(false)} href="#beranda" className="text-lg font-medium hover:text-primary">
              Beranda
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#layanan" className="text-lg font-medium hover:text-primary">
              Layanan
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#harga" className="text-lg font-medium hover:text-primary">
              Harga
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#faq" className="text-lg font-medium hover:text-primary">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
