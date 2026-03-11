import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950">
      <style>{`.pd{font-family:'Playfair Display',serif} .nl:hover::after{transform:scaleX(1)}`}</style>
      <div className="max-w-6xl mx-auto flex items-center p-6 justify-between">
        
        {/* Logo */}
        <div className="pd text-xl text-white tracking-widest uppercase">
          Yug<span className="text-amber-400">aanter</span> Ramdas
        </div>

        {/* Desktop Menu */}
        <nav className="nl transition-colors hidden md:flex items-center space-x-6 text-gray-400 font-medium">
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
        <div className="md:hidden bg-slate-950 border-t">
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
