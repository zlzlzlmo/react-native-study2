import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
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
      return <GameScreen />;
    }
    return <StartGameScreen pickNumber={pickNumber} />;
  }, [userNumber]);
  return <View style={styles.rootContainer}>{screenToShow}</View>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.subColor3,
  },
});
