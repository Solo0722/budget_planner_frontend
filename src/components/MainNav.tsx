import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { Button, Avatar, Badge } from "antd";
import { HiOutlineBell } from "react-icons/hi2";

const MainNav = () => {
  return (
    <NavWrapper>
      <h4>
        <strong>Budget Planner</strong>
      </h4>
      <ToolbarWrapper>
        <Avatar src="https://starrfm.com.gh/wp-content/uploads/2021/12/ed-sheeran-press-photo-2018-1519211115-list-handheld-0.png" />
      </ToolbarWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: #fff;
  box-shadow: rgb(16 16 17 / 2%) 0px 1px 2px, rgb(16 16 17 / 1%) 0px 3.4px 8px,
    rgb(16 16 17 / 0%) 0px 12px 30px;
  padding: 0 1rem;
  position: sticky;
  top: 0;

  h4 {
    color: ${colors.primary};
  }
`;

const ToolbarWrapper = styled.div``;

export default MainNav;
