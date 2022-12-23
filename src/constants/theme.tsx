import { ITheme } from "../utils/@types";

const defaultTheme = {
  primaryColor: "#6C63FF",
};

export const lightTheme: ITheme = {
  ...defaultTheme,
  body: "#fff",
  text: "#363537",
  background: "#363537",
  herobg: "#fafbf8",
  border: "rgba(0,0,0,0.1)",
  cardShadow1: "rgba(0, 0, 0, 0.1)",
  cardShadow2: "rgba(0, 0, 0, 0.06)",
};

export const darkTheme: ITheme = {
  ...defaultTheme,
  body: "#212121",
  text: "#fafafa",
  background: "#999",
  herobg: "#1a1b18",
  border: "rgba(255,255,255,0.1)",
  cardShadow1: "rgba(0, 0, 0, 0.15)",
  cardShadow2: "rgba(0, 0, 0, 0.1)",
};
