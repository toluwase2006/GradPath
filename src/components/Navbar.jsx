import React from "react";
import { GradPathLogo } from "../assets/icon";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useDarkMode } from "../hooks/useDarkMode";


const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation().pathname

  return (
    // Header

    <header className="bg-[var(--color-surface)] text-[var(--color-text)] border-b border-[var(--color-border)] shadow-md h-18 flexItemsCenter transition-colors duration-200">
      <div className="container flex justify-between h-full items-center">
        <div className="flex items-center gap-2">
          <GradPathLogo size={24} />
          <p className="font-bold">GradPath</p>
        </div>
        <div className="flex items-center gap-4 h-full">
          {/* Nav */}

          <nav className="flex items-center gap-4 h-full">
            <ul className="flex  items-center gap-4 text-[0.75rem] md:text-20 h-full">
              <li className="h-full"><Link to="/" className={`flex items-center gap-1 h-full border-b-[3px] hover:border-b-[var(--color-primary)] ${location == "/" ? "border-b-[var(--color-primary)]" : "border-b-transparent"}`}>EXPLORE</Link>
              </li>
              <li className="relative h-full">
                <Link to="/savedOpportunities" className={`flex items-center gap-1 h-full border-b-[3px] hover:border-b-[var(--color-primary)] ${location == "/savedOpportunities" ? "border-b-[var(--color-primary)]" : "border-b-transparent"}`}>
                  SAVED
                  <span className="bg-[var(--color-primary)] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* mode toggle */}

          <div className="flexItemsCenter gap-4 w-16 h-8 cursor-pointer bg-[var(--color-navy)] relative rounded-lg" onClick={toggleDarkMode}>
            <IoMdSunny size={16} className="text-[var(--color-text-muted)]" />
            <IoMoon size={16} className="text-[var(--color-text-muted)]" />
            <button className={`h-6 w-6 rounded-full bg-[var(--color-surface)] text-[var(--color-text)] flexItemsCenter justify-center absolute left-[5px]  transition-transform duration-300 ease-in-out transform translate-x-0 ${isDark ? 'translate-x-8' : ''}`}>
              {isDark ? (
                <IoMoon size={12} className="" />
              ) : (
                <IoMdSunny size={12} className="" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
