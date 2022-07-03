import React from 'react';
import darkmode from '../assets/dark_mode.png';

export default function Header() {
  return (
    <header className="mx-auto p-4 pt-4 sm:px-2 md:px-6">
      <div className="flex flex-row items-center md:shrink-0 justify-between h-14 px-2">
        <a href="/" className="flex-shrink-0 flex items-center">
          <span className="text-2xl tracking-tight text-[#383838] font-bold">커피&디저트노트</span>
        </a>
      <nav className="flex flex-row items-end px-2">
        <img src={darkmode} alt="darkmode" className="flex items-end h-8"></img>
      </nav>
      </div>
    </header>
  )
}