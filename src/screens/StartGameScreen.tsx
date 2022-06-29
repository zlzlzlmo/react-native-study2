import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

// * StyleSheet에 elevation 스타일 속성이 있는데 숫자가 높을 수록 box-shadow 효과를 보여준다  ( 안드로이드만 가능 ! )
// ! IOS도 shadow효과를 주고 싶으면 shadowColor, shadowOffset, shadowOpacity, shadowRadius를 사용해야한다 ( 이것은 IOS만 가능 하기 때문에 두 플랫폼 모두 적용하려면 elevation과 이거 모두 적용 해야함 )

const StartGameScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <PrimaryButton>버튼1</PrimaryButton>
        <PrimaryButton>버튼2</PrimaryButton>
      </View>
    </SafeAreaView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "blue",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
