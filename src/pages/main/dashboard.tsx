import { Button, Tooltip } from "antd";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";
import { PlusCircleFilled } from "@ant-design/icons";
import CreateBudget from "../../components/CreateBudget";
import EmptyState from "../../components/EmptyState";
import BudgetCard from "../../components/BudgetCard";
import Spinner from "../../utils/spinner";
import { GlobalContext } from "../../context/context";

const Dashboard = ({ ref1, ref2, ref3 }: any) => {
  const { getAllBudgets, budgets } = useContext(GlobalContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getAllBudgets?.();
  }, []);

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
              ref={ref2}
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
        {!budgets || !budgets.length ? (
          <EmptyState ref3={ref3} />
        ) : (
          budgets.map((item) => <BudgetCard item={item} id={item.id} />)
        )}
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
