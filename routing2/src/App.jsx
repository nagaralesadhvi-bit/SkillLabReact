import Home from "./components/Home"
import List from "./components/List"
import './App.css';

import React from 'react'
import {Routes, Route} from "react-router-dom";

export default function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/List" element={<List />}/>
      </Routes>
      
  );
}
