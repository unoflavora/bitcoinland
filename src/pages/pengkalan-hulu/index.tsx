import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import MotionDiv from "../_components/motionDiv";
import {motion} from 'framer-motion';
import Image from "next/image";
import PengkalanHulu from "./(components)/pengkalanHulu";
export default function Page()
{
    return <div className="w-full h-full relative">
        <Header descColor="text-white" descText="BITCOIN ELEPHANT SANCTUARY" fromColor="from-white" toColor="from-white" headerText="PENGKALAN HULU" src="/pengkalan-hulu/hero.png"/>
        <PengkalanHulu/>
        <div className={parentElementStyle + " " + "bg-gray-200"}>
            <div className="flex flex-col gap-4 md:gap-10 items-start ">
                <MotionDiv>
                    <div className="text-3xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] ml-1">
                    Pengkalan Hulu - Betong
                    </div>

                </MotionDiv>

                <motion.div
                    transition={{ease: "linear", duration: .6}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                >
                    <Image className="rounded-2xl" src={"/pengkalan-hulu/site-map.png"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>
                </motion.div>

            </div>
            <div className="w-full rounded-2xl flex relative items-center min-h-[40rem] bg-cover bg-[url('/pengkalan-hulu/staycation.png')] bg-opacity-40">
                <div className="w-full h-full rounded-2xl absolute z-0 bg-gradient-to-r from-white"/>
                <h1 className="text-3xl md:text-5xl text-black z-10 font-bold px-5 md:px-10 w-3/4">
                    Pengkalan Hulu Bitcoin Elephant Sanctuary
                </h1>
            </div>
            
            <div className="w-full grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-5 ">
                <div className="rounded-2xl min-h-[17rem] bg-cover bg-[url('/pengkalan-hulu/deforestation-plan.png')]"/>
                <div className="rounded-2xl min-h-[17rem] bg-cover bg-[url('/pengkalan-hulu/hero2.png')]"/>
                <div className="rounded-2xl min-h-[17rem] bg-cover bg-[url('/pengkalan-hulu/hero1.png')]"/>
            </div>

            <div className="flex flex-col gap-4 md:gap-10 items-start ">
                <MotionDiv>
                    <div className="text-3xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] ml-1">
                    Eco Friendly Staycation
                    </div>

                </MotionDiv>

                <motion.div
                    transition={{ease: "linear", duration: .6}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                >
                    <Image className="rounded-2xl" src={"/pengkalan-hulu/staycationplan.png"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>
                </motion.div>

            </div>
        </div>

       
    </div>
}