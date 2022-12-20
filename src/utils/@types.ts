import { CollectionReference, DocumentData } from "firebase/firestore";
import { ReactElement } from "react";

export interface ICreateBudget {
  isModalOpen: boolean;
  closeModal: () => void;
  showModal: () => void;
}

export interface IToolbar {
  title: string;
  isDashboard: boolean;
  tools?: ReactElement[];
}

export interface ITheme {
  body: string;
  text: string;
  background: string;
  herobg: string;
  border: string;
  cardShadow1: string;
  cardShadow2: string;
}

export interface IFormProps {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IProps {
  appTheme: string;
  setAppTheme: (appTheme: string) => void;
}

export interface INewBudgetState {
  title: string;
  description: string;
  budgetType: string;
}

//Types
export type ProviderProps = {
  children: JSX.Element;
};

export type ContextProps = {
  signInWithGoogle?: () => void;
  signUserOut?: () => void;
  emailSignIn?: (formData: { email: string; password: string }) => void;
  emailSignUp?: (formData: { email: string; password: string }) => void;
  currentUser?: any;
  userId?: string;
  isNewUser?: boolean;
  budgets?: any[];
  setIsNewUser?: (state: boolean) => void;
  getAllBudgets?: (bt?: string) => void;
  createNewBudget?: (state: {
    title: string;
    description: string;
    budgetType: string;
    ownerId: string;
  }) => void;
};
