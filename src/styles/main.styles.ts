import { View } from "react-native";
import { styled } from "styled-components";

export const MainTodoWrapper = styled(View)<{ theme: "light" | "dark" }>`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#e6ebbc" : "#59616e"};
`;
