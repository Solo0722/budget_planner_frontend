import React, { ReactElement } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface IToolbar {
  title: string;
  isDashboard: boolean;
  tools?: ReactElement[];
}

const Toolbar = ({ title, isDashboard, tools }: IToolbar) => {
  return (
    <ToolbarWrapper>
      <div className="title-part">
        {!isDashboard && (
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            style={{ marginRight: "5px" }}
          />
        )}
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <div>
        {tools?.map((tool) => {
          return tool;
        })}
      </div>
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  /* background: #fff;
  box-shadow: rgb(16 16 17 / 2%) 0px 1px 2px, rgb(16 16 17 / 1%) 0px 3.4px 8px,
    rgb(16 16 17 / 0%) 0px 12px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  /* border: 1px solid red; */
  padding: 0 1rem;
  margin-bottom: 15px;
  font-family: "Nunito Sans";

  .title-part {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title-part p {
    font-family: "Nunito Sans";
  }
`;

export default Toolbar;
