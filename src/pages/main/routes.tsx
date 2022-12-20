import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  lazy,
  Suspense,
} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import MainNav from "../../components/MainNav";
import styled from "styled-components";
import { GlobalContext } from "../../context/context";
import { TourProps, Tour } from "antd";
import Spinner from "../../utils/spinner";
import { IProps } from "../../utils/@types";

const Budget = lazy(() => import("./budget"));

const Main = ({ appTheme, setAppTheme }: IProps) => {
  const { currentUser, userId, isNewUser, setIsNewUser } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    (!currentUser || !userId || userId === "") && navigate("/auth");
  }, [currentUser, navigate, userId]);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    isNewUser && setOpen(true);
  }, []);

  const steps: TourProps["steps"] = [
    {
      title: "Budget Planner",
      description:
        "Save,manage and track your financies using this web application designed for your budgeting needs",
      cover: <img alt="tour.png" src="/assets/welcome.svg" />,
      target: () => ref1.current,
      placement: "bottom",
    },
    {
      title: "New Budget",
      description:
        "You can add new budgets to your list by clicking on this button",
      target: () => ref2.current,
      placement: "bottom",
    },
    {
      title: "Budget list",
      description: "This is where all the budgets you've created will be",
      target: () => ref3.current,
      placement: "bottom",
    },
    {
      title: "Profile",
      description: "You can view your profile, switch theme, or sign out here",
      target: () => ref4.current,
      placement: "bottom",
    },
  ];

  return (
    <>
      <MainNav ref4={ref4} appTheme={appTheme} setAppTheme={setAppTheme} />
      <MainWrapper>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path="/"
              element={<Dashboard ref1={ref1} ref2={ref2} ref3={ref3} />}
            />
            <Route path="/budgets/:budgetId" element={<Budget />} />
          </Routes>
        </Suspense>
        <Tour
          open={open}
          onClose={() => {
            setOpen(false);
            setIsNewUser?.(false);
          }}
          steps={steps}
        />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    & {
      padding: 2rem;
    }
  }
  @media screen and (max-width: 486px) {
    & {
      padding: 1rem;
    }
  }
`;

export default Main;
