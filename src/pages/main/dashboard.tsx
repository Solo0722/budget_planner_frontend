import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";
import { PlusCircleFilled } from "@ant-design/icons";
import BudgetCard from "../../components/BudgetCard";
import CreateBudget from "../../components/CreateBudget";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <DashboardWrapper>
      <Toolbar
        title="Budgets"
        isDashboard={true}
        tools={[
          <Tooltip title="New budget">
            <Button
              icon={<PlusCircleFilled />}
              type="text"
              onClick={showModal}
            />
          </Tooltip>,
        ]}
      />
      <CreateBudget
        isModalOpen={isModalOpen}
        showModal={showModal}
        closeModal={closeModal}
      />
      <BodyContainer>
        <BudgetCard />
        <BudgetCard />
        <BudgetCard />
        <BudgetCard />
      </BodyContainer>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Dashboard;
