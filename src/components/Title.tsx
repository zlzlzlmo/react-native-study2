import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/variables";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.subColor,
    textAlign: "center",
    borderWidth: 2,
    paddingVertical: 10,
    borderColor: colors.subColor,
  },
});
