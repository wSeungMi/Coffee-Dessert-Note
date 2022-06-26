import React from 'react';

export default function Header() {
    return (
       <header className="flex items-left justify-left flex-wrap bg-white pb-7 border-b border-gray-100">
         <span className="text-3xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#f0e600] via-[#fcd34d] to-[#f3ca00]">달콤</span>
         <span className="text-3xl tracking-tight text-[#f7cd6a]">노트</span>
       </header>
    )
}