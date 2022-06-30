import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../styles/variables";

interface NumberContainerProps {
  children: number;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.mainColor,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.subColor,
    fontSize: 36,
    fontWeight: "bold",
  },
});
