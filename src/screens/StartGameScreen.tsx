import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../styles/variables";

// * StyleSheet에 elevation 스타일 속성이 있는데 숫자가 높을 수록 box-shadow 효과를 보여준다  ( 안드로이드만 가능 ! )
// ! IOS도 shadow효과를 주고 싶으면 shadowColor, shadowOffset, shadowOpacity, shadowRadius를 사용해야한다 ( 이것은 IOS만 가능 하기 때문에 두 플랫폼 모두 적용하려면 elevation과 이거 모두 적용 해야함 )

// * TextInput에 있는 keyboardType 속성 값으로 인풋 입력시 사용할 키보드 타입을 지정할 수 있다.
// * 또한 default 각 문장별로 첫번째 문자는 대문자로 쓰이는데 autoCapitalize 를 false를 주면 대문자로 변환하는걸 막을 수 있다.

// * width 100% 처럼 보이는것은 align Items 의 기본값이 stretch이기 떄문이다.

// * Alert.alert 를 사용하여 RN에서 제공하는 alert기능을 사용할 수 있다.
const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState<string>("");

  const handleEnteredValue = (text: string) => {
    setEnteredValue(text);
  };

  const resetEntererdValue = () => {
    setEnteredValue("");
  };

  const handleConfirm = () => {
    const { isValidNumber, number } = getValueForNumber(enteredValue);

    if (!isValidNumber) {
      Alert.alert(
        "유효하지 않은 값",
        "적절하지 못한 값입니다. 값은 오직 1이상 99이하만 가능합니다.",
        [
          {
            text: "확인",
            style: "destructive",
            onPress: resetEntererdValue,
          },
        ]
      );
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          value={enteredValue}
          onChangeText={handleEnteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => {}}>취소</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={handleConfirm}>확인</PrimaryButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
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

    backgroundColor: colors.mainColor,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    color: "#fff",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

function getValueForNumber(enteredValue: string) {
  const number = parseInt(enteredValue);

  const isValidNumber =
    typeof number === "number" && number > 0 && number < 100;
  return {
    number,
    isValidNumber,
  };
}
