import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Empty } from "antd";
import styled from "styled-components";

interface IncomeExpenseProps {
  title: string;
}

const IncomeExpenseBox = ({ title }: IncomeExpenseProps) => {
  return (
    <IncomeExpenseContainer>
      <div className="titlebar">
        <h5>{title}</h5>
        <Button icon={<PlusCircleFilled />} type="text" />
      </div>
      <div>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
    </IncomeExpenseContainer>
  );
};

const IncomeExpenseContainer = styled.div`
  width: 49%;
  min-height: 240px;
  padding: 1rem;
  /* border-radius: 7px; */
  margin: 10px 0;
  box-shadow: ${({ theme }) => theme.cardShadow1} 0px 1px 3px 0px,
    ${({ theme }) => theme.cardShadow2} 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;

  && .titlebar {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  && .titlebar h5 {
    /* color: ${({ theme }) => theme.primaryColor}; */
    font-weight: 1000;
  }

  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

export default IncomeExpenseBox;
