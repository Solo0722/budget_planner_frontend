import React, { useContext } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { Avatar, Badge, Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { GlobalContext } from "../context/context";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

const MainNav = ({ ref4 }: any) => {
  const { currentUser, signUserOut } = useContext(GlobalContext);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
    },
    {
      key: "2",
      label: "Switch theme",
    },
    {
      key: "3",
      label: "Sign out",
      onClick: signUserOut,
    },
  ];
  return (
    <NavWrapper>
      <h4>
        <strong>Budget Planner</strong>
      </h4>
      <ToolbarWrapper>
        <Button
          type="text"
          style={{ marginRight: "5px" }}
          icon={
            <Badge dot>
              <BellOutlined />
            </Badge>
          }
        />

        <Dropdown
          menu={{
            items,
          }}
        >
          <Avatar
            src={currentUser && currentUser?.user?.photoURL}
            style={{ cursor: "pointer" }}
            ref={ref4}
          >
            <UserOutlined />
          </Avatar>
        </Dropdown>
      </ToolbarWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: #fff;
  box-shadow: rgb(16 16 17 / 2%) 0px 1px 2px, rgb(16 16 17 / 1%) 0px 3.4px 8px,
    rgb(16 16 17 / 0%) 0px 12px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 99;

  h4 {
    color: ${colors.primary};
    font-family: "Lobster Two";
  }

  button {
    margin-right: 10px;
  }
`;

const ToolbarWrapper = styled.div``;

export default MainNav;
