import { Badge, Space, Tag } from "antd";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const BudgetCard = ({ item }: any) => {
  return (
    <Badge.Ribbon
      text={item.budgetType}
      color={getRibbonColor(item.budgetType)}
    >
      <BudgetCardWrapper>
        <Space direction="vertical" style={{ fontFamily: "Nunito Sans" }}>
          <small className="date-container">
            {moment().format("dddd, Do MMMM YYYY")}
          </small>
          <h4>{item.title}</h4>
          <small style={{ color: "GrayText" }}>{item.description}</small>
          <Tag className="tag">Total income: $123.00</Tag>
          <Tag className="tag">Total expenses: $101.00</Tag>
        </Space>
      </BudgetCardWrapper>
    </Badge.Ribbon>
  );
};

const getRibbonColor = (type: string) => {
  switch (type) {
    case "daily":
      return "magenta";
    case "monthly":
      return "cyan";
    case "yearly":
      return "green";
  }
};

const BudgetCardWrapper = styled.div`
  width: 250px;
  min-height: 180px;
  padding: 1rem;
  border-radius: 7px;
  margin: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s,
    transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  font-family: "Nunito Sans";
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    margin: 10px 0;
  }

  .date-container {
    color: ${colors.primary};
  }

  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

export default BudgetCard;
