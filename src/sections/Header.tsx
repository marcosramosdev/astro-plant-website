import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 left-0 w-full z-10 px-10">
        <div className="container mx-auto flex items-center justify-between py-6 px-6 text-white bg-green-950 backdrop-blur-3xl">
          <div className="text-4xl font-secondary font-bold tracking-tighter">
            Plantie.
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-1 bg-white rounded-full"></div>
            <div className="w-6 h-1 bg-white rounded-full"></div>
            <div className="w-6 h-1 bg-white rounded-full"></div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-10 font-black tracking-wider">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Popular
            </a>
            <a href="#" className="hover:text-gray-300">
              Review
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center  bg-green-950">
          <nav className="flex flex-col items-center gap-12 text-white text-3xl font-bold">
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              Popular
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              Review
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
