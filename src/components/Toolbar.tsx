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
