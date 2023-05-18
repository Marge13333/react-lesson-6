import React from "react";
import ReactPlayer from "react-player/youtube"
import '../style.css';


function VideoPlayer (){
    return <div className="VideoPlayer">
        <ReactPlayer url={"https://youtu.be/6Gv-GYOf0KI"}/>
    </div>
}
export default VideoPlayer;