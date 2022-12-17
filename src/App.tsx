import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/routes";
import Auth from "./pages/auth";
import GlobalProvider from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
