import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#fef9c3] to-[#fed7aa]">
      <div className="bg-white max-w-xl overflow-y-auto shadow-lg w-screen h-screen p-8">
       <Header />
       <Main />
      </div>
    </div>
  );
}

export default App;
