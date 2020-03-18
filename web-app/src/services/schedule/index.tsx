
import * as React from 'react';

import { connect } from 'react-redux'


import {
  WINODOW_SIZE_REDUCER_NAME,
  WindowSizeState
} from "../../api/window_size/constants"

import { stringify as qsStringify } from "qs";

type PROPS = {
  calendarId: string,
  timezone: string,
  size: {
    width: number,
    height: number
  }
}

const MAX_WIDTH = 800;

function CalenderView(props: PROPS){
  const width = Math.min(MAX_WIDTH, props.size.width);

  console.log(props);
  return (
    <div className="aspect_parent" style={{paddingTop:"75%"}}>
      <iframe
        src={
          `https://calendar.google.com/calendar/embed?${
            qsStringify({
                src: props.calendarId,
                ctz: props.timezone
            })
          }`
        }
        frameBorder="0"
        scrolling="no"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}


const mapStateToProps = (state: {[WINODOW_SIZE_REDUCER_NAME]: WindowSizeState }) => (
  {
    size: state[WINODOW_SIZE_REDUCER_NAME].size
  }
);

const mapDispatchToProps = (dispatch: (value: any)=> any) => ({});

const Calender = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalenderView)

export default Calender;
