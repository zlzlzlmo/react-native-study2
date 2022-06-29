import { StyleSheet, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { colors } from "./src/styles/variables";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.subColor3,
  },
});
