import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import GameOverScreen from "./src/screens/GameOverScreen";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import { colors } from "./src/styles/variables";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const pickNumber = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const gameIsOver = () => {
    setGameOver(true);
  };

  const restartGame = () => {
    setUserNumber(0);
    setGameOver(false);
  };

  const screenToShow = useMemo(() => {
    if (gameOver && userNumber) {
      return <GameOverScreen onRestartGame={restartGame} />;
    }

    if (userNumber) {
      return <GameScreen userNumber={userNumber} onGameOver={gameIsOver} />;
    }

    return <StartGameScreen pickNumber={pickNumber} />;
  }, [userNumber, gameOver]);
  return (
    <SafeAreaView style={styles.rootContainer}>{screenToShow}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.subColor3,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
