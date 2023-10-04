import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import MotionDiv from "../_components/motionDiv";
import {motion} from 'framer-motion';
import Image from "next/image";
import Mentagor from "./(components)/mentagor";
import EcoGlamping from "./(components)/ecoGlamping";
export default function Page()
{
    return <div className="w-full h-full relative">
        <Header descColor="text-white" descText="BITCOIN EXOCTIC ISLAND" fromColor="from-white" toColor="from-white" headerText="MENTAGOR" src="/mentagor/hero.webp"/>
        <Mentagor/>

        <div className={parentElementStyle}>

        <div className="flex flex-col gap-4 md:gap-10 items-start ">
                <MotionDiv>
                    <div className="text-3xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] ml-1">
                    Mentagor Island
                    </div>

                </MotionDiv>

                <motion.div
                    transition={{ease: "linear", duration: .6}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                >
                    <Image className="rounded-2xl" src={"/mentagor/map.webp"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>
                </motion.div>

            </div>

            <MotionDiv>
                <div className="flex w-full flex-col justify-center gap-5 ">

                    <div className="w-full h-full bg-cover bg-[url('/mentagor/bridge.webp')] min-h-[20rem] lg:min-h-[50rem] rounded-xl"/>
                    <div className="w-full flex items-center h-full bg-cover bg-[7%] bg-[url('/mentagor/rajamuda.webp')] min-h-[30rem] lg:min-h-[50rem] rounded-xl">
                        <h1 className="md:px-8 max-md:text-2xl w-1/2 px-4 2xl:px-16 text-3xl lg:text-5xl mb-44 lg:mb-64 font-bold md:w-5/12">Raja Muda Round Island Race Event</h1>
                    </div>



                </div>
            </MotionDiv>
           
        </div>

        <EcoGlamping/>
       
    </div>
}