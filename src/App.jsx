import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

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
        <Route path='/openai' element={<OpenaiPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
