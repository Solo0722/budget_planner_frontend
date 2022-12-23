import {
  DeleteFilled,
  ExclamationCircleFilled,
  PlusCircleFilled,
  PrinterOutlined,
} from "@ant-design/icons";
import { Button, Empty, Modal, Space, Tooltip } from "antd";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";
import { db } from "../../utils/firebase";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import IncomeExpenseBox from "../../components/IncomeExpenseBox";

const Budget = () => {
  const { budgetId } = useParams();
  const [currentBudget, setCurrentBudget] = useState<any>({});
  const navigate = useNavigate();

  console.log(budgetId);

  const getSingleBudget = (budgetId: string) => {
    const docRef = doc(db, "budgets" || "", budgetId);
    getDoc(docRef)
      .then((doc: any) => setCurrentBudget(doc.data()))
      .catch((err) => console.log(err));
  };

  const deleteBudget = (budgetId: string) => {
    const docRef = doc(db, "budgets" || "", budgetId);
    Modal.confirm({
      title: "Are you sure you want to delete this budget?",
      icon: <ExclamationCircleFilled />,
      content: "This action is irreversible.",
      onOk() {
        deleteDoc(docRef)
          .then(() => navigate(-1))
          .catch((err) => console.log(err));
      },
    });
  };

  useEffect(() => getSingleBudget(budgetId || ""), []);

  return (
    <BudgetPageWrapper>
      <Toolbar
        title={currentBudget.title || ""}
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
              onClick={() => deleteBudget(budgetId || "")}
            />
          </Tooltip>,
        ]}
      />
      <BodyWrapper>
        <BudgetSummaryBar>
          <div>
            <h5>Total Income</h5>
            <p>$10000</p>
          </div>
          <div>
            <h5>Total Expenses</h5>
            <p>$10000</p>
          </div>
          <div>
            <h5>Total Savings</h5>
            <p>$10000</p>
          </div>
        </BudgetSummaryBar>
        <ExpenseAndIncomeContainer>
          <IncomeExpenseBox title="Income" />
          <IncomeExpenseBox title="Expenses" />
        </ExpenseAndIncomeContainer>
      </BodyWrapper>
    </BudgetPageWrapper>
  );
};

const BudgetPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const BudgetSummaryBar = styled.div`
  width: 100%;
  padding: 1rem;
  /* border-radius: 7px; */
  margin: 10px 0;
  box-shadow: ${({ theme }) => theme.cardShadow1} 0px 1px 3px 0px,
    ${({ theme }) => theme.cardShadow2} 0px 1px 2px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  && div {
    height: 100%;
    text-align: center;
  }

  && div h5 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const ExpenseAndIncomeContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

export default Budget;
