
const WINODOW_SIZE_REDUCER_NAME = "WINDOW_SIZE";

enum WINODOW_SIZE_ACTIONS {
  SET = "WINDOW_SIZE_SET",
}

interface WindowSizeValues {
  width: number,
  height: number
};

interface WindowSizeState {
  size: WindowSizeValues
};


type WindowSizeAction = {
  type: WINODOW_SIZE_ACTIONS.SET,
  size: WindowSizeValues
};

export {
  WINODOW_SIZE_REDUCER_NAME,
  WINODOW_SIZE_ACTIONS,
  WindowSizeValues,
  WindowSizeAction,
  WindowSizeState
}
