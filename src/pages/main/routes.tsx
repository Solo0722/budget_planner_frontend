import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import MainNav from "../../components/MainNav";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <MainNav />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 486px) {
    & {
      padding: 1rem;
    }
  }
`;

export default Main;
