import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/variables";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

interface GameScreenProps {
  userNumber: number;
}

const GameScreen = ({ userNumber }: GameScreenProps) => {
  const generateRandomBetween = (
    min: number,
    max: number,
    exclude: number
  ): number => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateRandomBetween(min, max, exclude);
    }
    return randomNumber;
  };
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  return (
    <View style={styles.container}>
      <Title>Guess What?</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
