import * as React from "react"
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { combineReducers } from 'redux'
import { makeStore } from "./util/redux";

import Calander from "./services/schedule"

import StreamVideo from "./services/stream"


import { WINODOW_SIZE_REDUCER_NAME } from "./api/window_size/constants"
import windowSizeReducer from "./api/window_size/reducer"
import windowSizeAttachToStore from "./api/window_size/attach-to-store";

import * as data from './values/hidden.json';


export function initRun(selector: string){

  console.log("running");

  const store = makeStore(combineReducers(
    {
      [WINODOW_SIZE_REDUCER_NAME]: windowSizeReducer,
    }
  ));

  windowSizeAttachToStore(window, store);


  ReactDOM.render(
    <Provider store={store}>
      <div>
        <StreamVideo
          channelId={data.youtube.channelId}
        />
        <Calander
          calendarId={data.calendar.id}
          timezone={data.calendar.timezone}
        />
      </div>
    </Provider>,
    document.querySelector(selector)
  );

  console.log("finished")

};
