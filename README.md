# React Native 익히기 + 테스트코드 작성하기

## 숫자를 추측하는 간단한 게임 어플

### 학습 내용
- **Dimension API 를 사용하여 모바일 디바이스별 사이즈를 받아**와 css 처리하기
- app.json 내 **orientation 프로퍼티** 값을 활용하여 기기가 회전 될때 움직이지 않도록 lock을 할지 회전을 시킬지 설정하기 -> 기본적으로 portrait이 설정되어있고, portrait은 lock을 하여 고정 시키는 것이다. default 혹은 landscape로 변경하면 lock 해제가 가능하다.
- 화면 회전시 각 컴포넌트에 지정한 size별 비율이 달라서 이상하게 보일수 있으니 dimesion api를 사용하여 height와 width를 적절하게 동적으로 바까줘야한다.
- 일반 dimension api 사용말고 **useWindowDimensions 훅**을 사용해서도 동적으로 사이즈 조절이 가능하다. const {width,height} = useWindowDimensions() 이런식으로 사용하면 된다.  
- 디바이스 키패드가 뷰에 간섭을 하여 컨트롤이 불가능할 시 **KeyboardAvoidingView**  Api를 사용하여 flex 1 스타일을 적용하면 view에 대한 간섭을 제거할 수 잇따.
