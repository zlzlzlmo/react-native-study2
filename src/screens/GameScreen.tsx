import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/variables";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameScreenProps {
  userNumber: number;
}

let minBoundary = 1;
let maxBoundary = 100;

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

  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  const generateNextGuessNumber = (direction: "lower" | "greater") => {
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.container}>
      <Title>Guess What?</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => {}}>+</PrimaryButton>
          <PrimaryButton onPress={() => {}}>-</PrimaryButton>
        </View>
      </View>
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
