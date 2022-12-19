import { Button, Select, Tooltip } from "antd";
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

  const handleBudgetFilter = (value: string) => {
    if (value === "all") {
      getAllBudgets?.();
    } else {
      getAllBudgets?.(value);
    }
  };

  return (
    <DashboardWrapper>
      <Toolbar
        title="Budgets"
        isDashboard={true}
        tools={[
          <Select
            defaultValue="all"
            onChange={handleBudgetFilter}
            bordered={false}
            style={{
              marginRight: "10px",
              boxShadow: "0px 2px 2px rgba(0,0,0,0.1)",
            }}
            options={[
              {
                value: "all",
                label: "All",
              },
              {
                value: "daily",
                label: "Daily",
              },
              {
                value: "monthly",
                label: "Monthly",
              },
              {
                value: "yearly",
                label: "Yearly",
              },
            ]}
          />,
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
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Dashboard;
