
import * as React from 'react';

import { connect } from 'react-redux'

import {
  WINODOW_SIZE_REDUCER_NAME,
  WindowSizeState
} from "../../api/window_size/constants"

import { stringify as qsStringify } from "qs";

type PROPS = {
  channelId: string
  size: {
    width: number,
    height: number
  }
}

const MAX_WIDTH = 800;


function StreamVideoView(props: PROPS){
  const width = Math.min(MAX_WIDTH, props.size.width);

  return (
    <div>
      <div className="aspect_parent" style={{paddingTop:"56.25%"}}>
        <iframe
          src={
            `https://www.youtube.com/embed/live_stream?${
              qsStringify({
                  channel: props.channelId
              })
            }`
          }
          allowFullScreen={true}
          frameBorder={0}
          style={{
            border: 0,
            margin: 0,
            padding: 0
          }}
        ></iframe>
      </div>
      <h1
        style={{
          border: 0,
          margin: 0,
          padding: 0
        }}
      ><a
        href={`https://www.youtube.com/channel/${props.channelId}/videos`}
      >Past Broadcasts</a></h1>
    </div>
  )
}


const mapStateToProps = (state: {[WINODOW_SIZE_REDUCER_NAME]: WindowSizeState }) => (
  {
    size: state[WINODOW_SIZE_REDUCER_NAME].size
  }
);

const mapDispatchToProps = (dispatch: (value: any)=> any) => ({})

const StreamVideo = connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamVideoView)

export default StreamVideo;
