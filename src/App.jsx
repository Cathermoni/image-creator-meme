import OpenaiPage from "./openai-page/OpenaiPage";
import MainPage from "./MainPage";

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/openai-page' element={<OpenaiPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
