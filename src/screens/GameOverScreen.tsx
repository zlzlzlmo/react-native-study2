import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverScreenProps {
  onRestartGame: () => void;
}

const GameOverScreen = ({ onRestartGame }: GameOverScreenProps) => {
  return (
    <View>
      <Text>GameOverScreen</Text>
      <PrimaryButton onPress={onRestartGame}>다시 하기!</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({});
