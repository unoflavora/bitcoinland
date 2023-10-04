import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import Pangkor from "./(components)/pangkor";
import MotionDiv from "../_components/motionDiv";
import {motion} from 'framer-motion';
import Image from "next/image";
export default function Page()
{
    return <div className="w-full h-full relative">
                <Header descColor="text-white" descText="BITCOIN EXOCTIC ISLAND" fromColor="from-white" toColor="from-white" headerText="PANGKOR" src="/pangkor/hero.webp"/>
        <Pangkor/>

        <div className={parentElementStyle}>

        <div className="flex flex-col gap-4 md:gap-10 items-start">
                <MotionDiv>
                    <div className="text-4xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] ml-1">
                    Access & Connectivity
                    </div>

                </MotionDiv>

                <motion.div
                    transition={{ease: "linear", duration: .6}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                >
                    <Image className="rounded-2xl" src={"/pangkor/highway.webp"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>
                </motion.div>

            </div>

            <MotionDiv>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row gap-5 py-10">
                        <h1 className="font-bold text-black text-4xl md:px-10 min-w-max">Pangkor Island <br/> Airport</h1>
                        <p className="text-text-grey">
                        Pangkor Airport was opened in 1993 with an 732m airstrip, but its flight operations ceased in February 2014. It reopened in 2020 and will further boost tourism and business on the resort island, which will be a duty-free destination. It is serviced by a single airline, Berjaya Air, and which runs three flights weekly, on Wednesdays, Fridays, and Sundays from the Subang (Sultan Abdul Aziz Shah) airport in Kuala Lumpur.
                        </p>
                    </div>
                    <Image className="rounded-2xl" src={"/pangkor/airport2.webp"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>
                </div>
            </MotionDiv>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20">
            <div className="w-full bg-[url('/pangkor/pangkorpath.webp')] min-h-[25rem] bg-[40%] bg-cover rounded-2xl "/>
            <div className="flex flex-col  gap-5 py-10">
                    <h1 className="font-bold text-black text-4xl">Private Aviation Terminal</h1>
                    <p className="text-text-grey">
                    The presence of a private aviation terminal on an island appeal to high-end tourists, business travellers, and individuals seeking a smooth and exclusive travel experience.
                    </p>
            </div>

            </div>
           
        </div>
       
    </div>
}