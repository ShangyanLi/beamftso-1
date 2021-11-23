import React from "react";
import ReactPlayer from 'react-player'
import logo from "../logo.svg";
// import video from "../assets/logo.mov";
import logoAvi from "../assets/logo_1280x720.gif";
import logoGraph from "../assets/Beam_OpenGraph.png";

import { Popover } from '@headlessui/react'

function MyPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src={logoGraph} alt="" />
      </Popover.Panel>
    </Popover>
  )
}



export default function Home() {
  return (
   <>
    <div class="relative overflow-hidden mb-8">
    
    <img class="z-30" src={logoAvi} alt="logo"/>
    {/* <img class="z-40 -mt-96 w-1/3 h-1/3" src={logoGraph} /> */}
   

    {/* <div class="relative w-full h-full flex justify-center items-center text-red text-2xl font-extrabold">
    
    
    <img class="z-40 relative -ml-96 w-1/3 h-1/3 opacity-10" src={logoGraph} />
    
    </div> */}
  </div>

   </>
  );
}
