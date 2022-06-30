import { render, screen, fireEvent } from "@testing-library/react-native";
import GameScreen from "../../src/screens/GameScreen";
import { Alert } from "react-native";

describe("<GameScreen/>", () => {
  test("show alert when to click a wrong direction button", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.1);
    jest.spyOn(Alert, "alert");
    const gameOverMockFn = jest.fn();
    render(<GameScreen userNumber={25} onGameOver={gameOverMockFn} />);

    const greaterBtn = screen.getByText("+");
    const lowerBtn = screen.getByText("-");

    expect(greaterBtn).toBeDefined();
    expect(lowerBtn).toBeDefined();

    fireEvent.press(lowerBtn);
    expect(Alert.alert).toHaveBeenCalledWith("삐익!!", "솔직하게 답해주세요!", [
      { style: "cancel", text: "다시 할게요!" },
    ]);
  });
});
