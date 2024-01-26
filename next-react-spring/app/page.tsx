'use client'

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeaderComponent from "./layout/HeaderComponent";


export default function Home() {
  return (
    <main>
      <Parallax pages={4}>
        <ParallaxLayer speed={0.2} offset={0}>
          <div className=" h-full bg-[#F9EFDB]">

          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={1}>
          <div className=" h-full bg-[#EBD9B4]">

          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={2}>
          <div className=" h-full bg-[#9DBC98]">

          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={3}>
          <div className=" h-full bg-[#638889]">

          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
