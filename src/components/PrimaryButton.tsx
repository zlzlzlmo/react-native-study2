import { StyleSheet, View, Text } from "react-native";
import React from "react";

interface PrimaryButtonProps {
  children: string;
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
