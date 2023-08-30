import { FC } from "react";
import { TextProps } from "react-native";
import { StyledParagraph } from "./Paragraph.styles";
import { useStore } from "effector-react";
import { $theme } from "../../lib/theme/theme";

interface IProps extends TextProps {
  text: string;
}

export const Paragraph: FC<IProps> = ({ text, ...textProps }) => {
  const theme = useStore($theme);

  return (
    <StyledParagraph theme={theme} {...textProps}>
      {text}
    </StyledParagraph>
  );
};
