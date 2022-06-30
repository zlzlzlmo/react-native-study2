import { render, screen, fireEvent } from "@testing-library/react-native";
import GameScreen from "../../src/screens/GameScreen";
import { Alert } from "react-native";

describe("<GameScreen/>", () => {
  const gameOverMockFn = jest.fn();
  let greaterBtn: any;
  let lowerBtn: any;
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.1);
    jest.spyOn(Alert, "alert");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("userNumber is greater than currentGuess value", () => {
    test("show alert when to click a wrong direction button", () => {
      render(<GameScreen userNumber={25} onGameOver={gameOverMockFn} />);

      greaterBtn = screen.getByText("+");
      lowerBtn = screen.getByText("-");

      fireEvent.press(lowerBtn);

      expect(Alert.alert).toHaveBeenCalledWith(
        "삐익!!",
        "솔직하게 답해주세요!",
        [{ style: "cancel", text: "다시 할게요!" }]
      );
    });

    test("don't show alert when to click a right direction button", () => {
      render(<GameScreen userNumber={25} onGameOver={gameOverMockFn} />);
      greaterBtn = screen.getByText("+");
      lowerBtn = screen.getByText("-");
      fireEvent.press(greaterBtn);
      expect(Alert.alert).not.toHaveBeenCalled();
    });
  });
});
