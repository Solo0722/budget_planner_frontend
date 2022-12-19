import { DeleteFilled, PrinterOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";

const Budget = () => {
  return (
    <BudgetPageWrapper>
      <Toolbar
        title="Budget for 2023 (Yearly)"
        isDashboard={false}
        tools={[
          <Tooltip title="Print budget">
            <Button
              icon={<PrinterOutlined />}
              type="text"
              // style={{ color: "red" }}
            />
          </Tooltip>,
          <Tooltip title="Delete budget">
            <Button
              icon={<DeleteFilled />}
              type="text"
              style={{ color: "red", marginLeft: "5px" }}
            />
          </Tooltip>,
        ]}
      />
    </BudgetPageWrapper>
  );
};

const BudgetPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Budget;
