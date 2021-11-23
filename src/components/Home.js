import React, { useEffect } from "react";
import logoGraph from "../assets/Beam_OpenGraph.png";
import "../App.css"

export default function Home() {

  return (
    <div className="bg-black ">
      <div class="relative overflow-hidden mb-8 bg-black justify-item-center">
        <div id="waveGif" className="video_div">
          <img id="markId" class="w-1/5 mx-auto pt-3" src={logoGraph} alt="mark" />
          <p className="font-thin text-white mx-auto mt-7 text-2xl">
            Delegate to us at&nbsp;
            <a
              className="no-underline titlelink"
              href="https:songbird-explorer.flare.network/address/0x8888888830A0fddAaa09CCD891fF5D35fb45D2A6"
              target="_blank"
              rel="noreferrer"
            >
              0x8888888830A0fddAaa09CCD891fF5D35fb45D2A6
            </a>
          </p>
        </div>
      </div>
    </div>
  );



}
