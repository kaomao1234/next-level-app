import { Component, FunctionComponent } from "react";
import {Footer} from "@/components"
import { Inform, Intro, ScoreDistribution } from "@/templates/home";
const Home  = () => {
  return <div className="flex w-full h-full min-h-screen flex-col bg-white">
    <Intro/>
    <Inform/>
    <ScoreDistribution/>
  </div>
};

export { Home };
