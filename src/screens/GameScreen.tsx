import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/variables";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Guess What?</Title>
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
