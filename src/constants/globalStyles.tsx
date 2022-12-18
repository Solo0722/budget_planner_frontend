import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background:${({ theme }: any) => theme.body};
        color:${({ theme }: any) => theme.text};
          font-family: "Lato", "Nunito Sans", sans-serif;
        transition:all 0.50s linear;
    }
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 3px;
}
`;
