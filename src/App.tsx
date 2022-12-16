import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from './pages/main/routes';
import Auth from './pages/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
