import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

// * StyleSheet에 elevation 스타일 속성이 있는데 숫자가 높을 수록 box-shadow 효과를 보여준다  ( 안드로이드만 가능 ! )
// ! IOS도 shadow효과를 주고 싶으면 shadowColor, shadowOffset, shadowOpacity, shadowRadius를 사용해야한다 ( 이것은 IOS만 가능 하기 때문에 두 플랫폼 모두 적용하려면 elevation과 이거 모두 적용 해야함 )

// * TextInput에 있는 keyboardType 속성 값으로 인풋 입력시 사용할 키보드 타입을 지정할 수 있다.
// * 또한 default 각 문장별로 첫번째 문자는 대문자로 쓰이는데 autoCapitalize 를 false를 주면 대문자로 변환하는걸 막을 수 있다.
const StartGameScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
        />
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
    padding: 5,
    elevation: 5,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
