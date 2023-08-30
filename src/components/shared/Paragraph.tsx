import { FC } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface IProps extends TextProps {
  text: string;
}

export const Paragraph: FC<IProps> = ({ text, ...textProps }) => {
  return (
    <Text style={styles.paragraph} {...textProps}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 18,
    fontWeight: "500",
  },
});
