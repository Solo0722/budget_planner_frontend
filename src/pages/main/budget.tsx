import {
  DeleteFilled,
  ExclamationCircleFilled,
  PrinterOutlined,
} from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";
import { db } from "../../utils/firebase";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

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
    </BudgetPageWrapper>
  );
};

const BudgetPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Budget;
