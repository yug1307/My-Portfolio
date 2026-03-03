import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sky-800">
      <div className="max-w-6xl mx-auto flex items-center px-5 justify-between">
        
        {/* Logo */}
        <svg width="600" height="180%" viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg">
          <style>{`.hotel-name { font-family: "Didot", "Bodoni MT", "Playfair Display", serif; font-size: 60px; font-weight: 500; letter-spacing: 4px; fill: #66b85e } .divider { stroke: #66b85e; stroke-width: 5 }`}</style>
          <line x1="170" y1="50" x2="530" y2="50" className="divider"/>
          <text x="370" y="108" textAnchor="middle" className="hotel-name">YUGAANTER RAMDAS</text>
          <line x1="170" y1="125" x2="530" y2="125" className="divider"/>
        </svg> 

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-white text-xl font-medium">
          <Link to="/" className="hover:text-[#C9A24D]">Home</Link>
          <Link to="/about" className="hover:text-[#C9A24D]">About</Link>
          <Link to="/projects" className="hover:text-[#C9A24D]">My Projects</Link>
          <Link to="/contact" className="hover:text-[#C9A24D]">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-sky-800 border-t">
          <nav className="flex flex-col items-center space-y-4 px-6 py-6 text-white font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/projects" className="hover:text-[#C9A24D]">My Projects</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Topbar;
