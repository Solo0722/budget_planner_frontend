import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth, colRef, provider } from "../utils/firebase";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { ContextProps, ProviderProps } from "../utils/@types";
import { getDocs } from "firebase/firestore";

export const GlobalContext = createContext<ContextProps>({});

const GlobalProvider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {});
  const [isNewUser, setIsNewUser] = useLocalStorage("isNewUser", false);
  const [budgets, setBudgets] = useState<object[]>([]);

  const navigate = useNavigate();

  //auth
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setCurrentUser(result);
        navigate("/");
        currentUser?._tokenResponse?.isNewUser && setIsNewUser(true);
      })
      .catch((err) => console.log(err));
  };

  const emailSignIn = (formData: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((result) => {
        setCurrentUser(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const emailSignUp = (formData: { email: string; password: string }) => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((result) => {
        setCurrentUser(result);
        setIsNewUser(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const signUserOut = () => {
    Modal.confirm({
      title: "Are you sure you want to sign out?",
      icon: <ExclamationCircleFilled />,
      content: "Feel free to sign back in any time.",
      onOk() {
        signOut(auth)
          .then(() => {
            setCurrentUser({});
            navigate("/auth");
          })
          .catch((err) => console.log(err));
      },
    });
  };

  //database
  const getAllBudgets = () => {
    getDocs(colRef)
      .then((snapshot) => {
        let budg: object[] = [];
        snapshot.docs.forEach((doc) => {
          budg.push({ ...doc.data(), id: doc.id });
        });
        setBudgets(budg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GlobalContext.Provider
      value={{
        signInWithGoogle,
        emailSignIn,
        emailSignUp,
        signUserOut,
        getAllBudgets,
        currentUser,
        isNewUser,
        setIsNewUser,
        budgets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
