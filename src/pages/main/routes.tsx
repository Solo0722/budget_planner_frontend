import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import MainNav from "../../components/MainNav";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";

const Main = () => {
  return (
    <>
      <MainNav />
      <MainWrapper>
        <Sidebar />
        <RoutesWrapper>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </RoutesWrapper>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RoutesWrapper = styled.div`
  width: 82%;
  padding: 1rem 1rem 0 1rem;
`;

export default Main;
