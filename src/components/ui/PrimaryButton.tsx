import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { colors } from "../../styles/variables";

interface PrimaryButtonProps {
  children: string;
  onPress: () => void;
}

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: colors.subColor,
    borderRadius: 27,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
