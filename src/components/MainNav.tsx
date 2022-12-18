import React, { useContext } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { Avatar, Badge, Button, Dropdown, Switch } from "antd";
import type { MenuProps } from "antd";
import { GlobalContext } from "../context/context";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const MainNav = ({ ref4, appTheme, setAppTheme }: any) => {
  const { currentUser, signUserOut } = useContext(GlobalContext);

  const themeToggler = () => {
    appTheme === "light" ? setAppTheme("dark") : setAppTheme("light");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
    },

    {
      key: "2",
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={themeToggler}
          icon={
            appTheme === "light" ? (
              <HiOutlineMoon size={18} />
            ) : (
              <HiOutlineSun size={18} />
            )
          }
        />
        <Button
          type="text"
          style={{ margin: "0 5px" }}
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
            style={{ cursor: "pointer", marginLeft: "5px" }}
            ref={ref4}
            size={"small"}
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
  background: ${({ theme }) => theme.body};
  box-shadow: rgb(16 16 17 / 2%) 0px 1px 2px, rgb(16 16 17 / 1%) 0px 3.4px 8px,
    rgb(16 16 17 / 0%) 0px 12px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 99;

  h4 {
    color: ${colors.primary};
    font-family: "Lobster Two";
  }
`;

const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default MainNav;
