import { WINODOW_SIZE_REDUCER_NAME, WINODOW_SIZE_ACTIONS, WindowSizeState, } from "./constants";
import {
  s_WindowSizeSet
} from "./actions";

import {
  getWindowSize
} from "../../util/size";
import { Store } from 'redux'



const WINDOW_SIZE_REDUCER_NAME = "window_size_reducer_name";

export default function attachToStore(window: Window, store: Store){
  const listener = ()=>{
    store.dispatch(s_WindowSizeSet(
      getWindowSize(window)
    ))
  }

  window.addEventListener('resize', function() {
    listener()
  }, true);

  setTimeout(listener,1);

  return ()=>{
    window.removeEventListener("resize", listener);
  }
}
