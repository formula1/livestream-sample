import { WINODOW_SIZE_ACTIONS, WindowSizeValues, WindowSizeAction } from "./constants";

export function s_WindowSizeSet(state: WindowSizeValues): WindowSizeAction{
  return {
    type: WINODOW_SIZE_ACTIONS.SET,
    size: state
  }
}
