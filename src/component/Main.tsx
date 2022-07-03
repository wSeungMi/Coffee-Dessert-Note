import React from 'react';
import noncoffee from '../assets/note_noncoffee.png';
import coffee from '../assets/note_coffee.png';
import bakery from '../assets/note_bakery.png';
import cake from '../assets/note_cake.png';

export default function Main() {
  return (
   <main className="mx-auto mt-7 px-4 sm:px-6 md:px-6">
      <div className="flex items-center justify-between px-2 mb-10">
        <div className="flex flex-col items-left md:shrink-0">   
          <span className="text-xs tracking-tight font-semibold text-neutral-400">22.06.29</span>
          <span className="text-2xl tracking-tight font-semibold text-[#fecb2e]">0</span>
        </div>
        <div className="flex flex-col items-center md:shrink-0"> 
           <a href="/" className="">
             <div className="bg-[#ffc30b] hover:bg-[#ffb10b] text-white font-bold py-2 px-4 border border-[#ffb10b] rounded">기록하기</div>
           </a>
        </div>
      </div>
      <div className="max-w-8xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 mx-auto mt-0 px-2 pb-8">
        <a href="/" className="">  
          <div className="flex flex-row items-center w-50 h-44 rounded overflow-hidden bg-white border border-[#ffdc91] hover:shadow-md cursor-pointer">
           <img src={coffee} className="h-36" alt="cake"></img>
           <div className="flex items-center justify-center flex-1">
               <div className="h-10">
                 <p className="text-2xl">커피</p> 
               </div>
           </div>
          </div>
        </a>
        <a href="/" className="">  
          <div className="flex flex-row items-center w-50 h-44 rounded overflow-hidden bg-white border border-[#ffdc91] hover:shadow-md cursor-pointer">
           <img src={noncoffee} className="h-36" alt="cake"></img>
           <div className="flex items-center justify-center flex-1">
               <div className="text-2xl h-10">음료</div>
           </div>
          </div>
        </a>
        <a href="/" className="">  
          <div className="flex flex-row items-center w-50 h-44 rounded overflow-hidden bg-white border border-[#ffdc91] hover:shadow-md cursor-pointer">
           <img src={cake} className="h-36" alt="cake"></img>
           <div className="flex items-center justify-center flex-1">
               <div className="text-2xl h-10">케이크</div>
           </div>
          </div>
        </a>
        <a href="/" className="">  
          <div className="flex flex-row items-center w-50 h-44 rounded overflow-hidden bg-white border border-[#ffdc91] hover:shadow-md cursor-pointer">
           <img src={bakery} className="h-36" alt="cake"></img>
           <div className="flex items-center justify-center flex-1">
               <div className="text-2xl h-10">베이커리</div>
           </div>
          </div>
        </a>
      </div>
   </main> 
  )
}