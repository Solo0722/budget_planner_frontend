import React from "react";
import SidebarContent from "./SidebarContent";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarContent />
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 18%;
  /* height: 100%; */
  border-right: 1px solid rgba(0,0,0,0.1);
  padding: 1rem 1rem 0 1rem;
`;

export default Sidebar;
