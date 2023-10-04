import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import Image from "next/image";
import Positioning from "./positioning";
import Location from "./location";
import Nodes from "./nodes";
import Architecture from "./architecture";
import Buildings from "./buildings";
import TouchDown from "./touchdown";
import Gallery from "./gallery";

export default function Page() {
    return (
        <div className="min-h-screen w-full xl:px-44">
            <Header src="/penang/hero.png" descColor="text-white" fromColor="text-white" toColor="text-white" descText="BITCOIN RESORT CITY" headerText="PENANG"/>
            <div className={parentElementStyle + " md:gap-20"}>
                <Location/>
                <Positioning/>
                <Nodes/>
                <Architecture/>
                <Buildings/>
                <TouchDown/>
                <Gallery/>
            </div>
        </div>
    )
}

