import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { colors } from "../styles/variables";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

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

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, userNumber);
  }, []);

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  const generateNextGuessNumber = (direction: "lower" | "greater") => {
    const isRightDirection =
      (direction === "lower" && currentGuess > userNumber) ||
      (direction === "greater" && currentGuess < userNumber);

    if (!isRightDirection) {
      Alert.alert("삐익!!", "솔직하게 답해주세요!", [
        { text: "다시 할게요!", style: "cancel" },
      ]);
      return;
    }
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

  useEffect(() => {
    if (userNumber !== currentGuess) return;
    onGameOver();
  }, [userNumber, currentGuess, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>Guess What?</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton
            onPress={generateNextGuessNumber.bind(this, "greater")}
          >
            +
          </PrimaryButton>
          <PrimaryButton onPress={generateNextGuessNumber.bind(this, "lower")}>
            -
          </PrimaryButton>
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
