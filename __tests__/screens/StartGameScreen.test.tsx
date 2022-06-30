import { render, screen, fireEvent } from "@testing-library/react-native";
import React from "react";
import { Alert } from "react-native";
import StartGameScreen from "../../src/screens/StartGameScreen";

// * mocking은 계속 메모제이션을 하고 있기 때문에 테스트가 끝나면 clear를 해줘야한다
afterEach(() => {
  jest.clearAllMocks();
});

describe("<StartGameScreen/>", () => {
  describe("alert", () => {
    let inputElement: any;
    let confirmButtonElement: any;

    beforeEach(() => {
      // * Alert를 spyon으로 감시하여 호출이 됐는지 확인하기 위함
      jest.spyOn(Alert, "alert");

      const mockFn = jest.fn();
      render(<StartGameScreen pickNumber={mockFn} />);
      inputElement = screen.getByDisplayValue("");
      confirmButtonElement = screen.getByText("확인");
      expect(inputElement).toBeDefined();
    });

    test("show alert when to enter a invalid value", () => {
      fireEvent.changeText(inputElement, "120");
      fireEvent.press(confirmButtonElement);
      expect(Alert.alert).toHaveBeenCalled();
    });

    test("dont show alert when to enter a invalid value", () => {
      fireEvent.changeText(inputElement, "12");
      fireEvent.press(confirmButtonElement);
      expect(Alert.alert).not.toHaveBeenCalled();
    });
  });
});
