import { WINODOW_SIZE_REDUCER_NAME, WindowSizeState } from "./constants";

export function r_width(state: {[WINODOW_SIZE_REDUCER_NAME]: WindowSizeState }): number{
  return state[WINODOW_SIZE_REDUCER_NAME].size.width;
}

export function r_height(state: {[WINODOW_SIZE_REDUCER_NAME]: WindowSizeState }): number{
  return state[WINODOW_SIZE_REDUCER_NAME].size.height;
}
