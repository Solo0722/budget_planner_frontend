import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/routes";
import Auth from "./pages/auth";
import GlobalProvider from "./context/context";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./constants/theme";
import { GlobalStyles } from "./constants/globalStyles";
import { ConfigProvider, theme } from "antd";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [appTheme, setAppTheme] = useLocalStorage(
    "appTheme",
    isDarkTheme ? "dark" : "light"
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6C63FF",
          borderRadius: 3,
          fontFamily: "Lato,Nunito Sans,sans-serif",
        },
        algorithm:
          appTheme === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <GlobalProvider>
            <Routes>
              <Route
                path="/*"
                element={<Main appTheme={appTheme} setAppTheme={setAppTheme} />}
              />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </GlobalProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
