import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Note from './component/Note';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

    // mx-auto : 가운데 정렬, max-w-md : 요소의 최대 넓이(448px), min-h-screen : 요소가 뷰포트 전체 높이에 맞게(최소높이)

function App() {
  return (
    <BrowserRouter>
    <div className="bg-gradient-to-tr from-pink-50 via-yellow-50 to-purple-50">
      <div className="max-w-md mx-auto md:max-w-2xl min-h-screen bg-white shadow-md overflow-y-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="note" element={<Note />} />
        </Routes>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
