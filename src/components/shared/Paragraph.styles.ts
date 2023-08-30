import { Text } from "react-native";
import { styled } from "styled-components";

export const StyledParagraph = styled(Text)<{ theme: "light" | "dark" }>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => (theme === "light" ? "#2b2b2b" : "#c9c9c9")};
`;
