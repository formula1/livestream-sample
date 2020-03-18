import {
  WINODOW_SIZE_REDUCER_NAME,
  WINODOW_SIZE_ACTIONS,
  WindowSizeState,
  WindowSizeAction
} from "./constants";

const DEFAULT_STATE: WindowSizeState = {
  size: {
    width: 0,
    height: 0
  }
}

function reducer(state: WindowSizeState = DEFAULT_STATE, action: WindowSizeAction) {
  switch (action.type) {
    case WINODOW_SIZE_ACTIONS.SET:
      return windowSizeSet(state, action as WindowSizeAction );
    default:
      return state
  }
}

function windowSizeSet(
  state: WindowSizeState = DEFAULT_STATE,
  action: WindowSizeAction
){

  console.log(action)
  const todos = {
    ...state,
    size: action.size
  }
  return todos;
}


export default reducer;
