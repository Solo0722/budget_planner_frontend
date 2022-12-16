import React, { useState } from "react";
import styled from "styled-components";
import { sidebarLinks } from "../constants/data";
import { Divider } from "antd";

const budgets = [
  "Budget for Christmas",
  "Budget for Christmas",
  "Budget for Christmas",
  "Budget for Christmas",
  "Budget for Christmas",
  "Budget for Christmas",
  "Budget for Christmas",
];

const SidebarContent = () => {
  return (
    <ContentWrapper>
      {sidebarLinks.map((item) => (
        <LinkWrapper>
          {item.icon}
          <span>{item.name}</span>
        </LinkWrapper>
      ))}
      <Divider />
      <h4>Budgets</h4>
      {budgets.map((budget) => (
        <Wrap>{budget}</Wrap>
      ))}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 1rem;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  margin-bottom: 7px;
  padding: 7px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & span {
    margin-left: 1rem;
  }

  &:hover {
    background: #f1f1ff;
    border-radius: 7px;
  }

  .active {
    background: #cedbff;
  }
`;

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 7px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f1f1ff;
    border-radius: 7px;
  }

  .active {
    background: #cedbff;
  }
`;

export default SidebarContent;
