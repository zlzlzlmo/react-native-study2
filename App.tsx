import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import { colors } from "./src/styles/variables";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);

  const pickNumber = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  const screenToShow = useMemo(() => {
    if (userNumber > 0) {
      return <GameScreen userNumber={userNumber} />;
    }
    return <StartGameScreen pickNumber={pickNumber} />;
  }, [userNumber]);
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
