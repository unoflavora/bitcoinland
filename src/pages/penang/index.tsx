import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import Image from "next/image";
import Positioning from "./(components)/positioning";
import Location from "./(components)/location";
import Nodes from "./(components)/nodes";
import Architecture from "./(components)/architecture";
import Buildings from "./(components)/buildings";
import TouchDown from "./(components)/touchdown";
import Gallery from "./(components)/gallery";

export default function Page() {
    return (
        <div className="min-h-screen w-full xl:px-44">
            <Header src="/penang/hero.webp" descColor="text-white" fromColor="text-white" toColor="text-white" descText="BITCOIN RESORT CITY" headerText="PENANG"/>
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

