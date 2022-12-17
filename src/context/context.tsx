import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect } from "react";
import { auth, provider } from "../utils/firebase";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import {  Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

type ProviderProps = {
  children: JSX.Element;
};

type ContextProps = {
  signInWithGoogle?: () => void;
  signUserOut?: () => void;
  emailSignIn?: (formData: { email: string; password: string }) => void;
  emailSignUp?: (formData: { email: string; password: string }) => void;
  currentUser?: any;
  isNewUser?: boolean;
  setIsNewUser?: (state: boolean) => void;
};

export const GlobalContext = createContext<ContextProps>({});

const GlobalProvider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {});
  const [isNewUser, setIsNewUser] = useLocalStorage("isNewUser", false);

  const navigate = useNavigate();

  useEffect(() => {
    (!currentUser || !currentUser.length ) && navigate("/auth");
  }, [currentUser]);

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

  return (
    <GlobalContext.Provider
      value={{
        signInWithGoogle,
        emailSignIn,
        emailSignUp,
        signUserOut,
        currentUser,
        isNewUser,
        setIsNewUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
