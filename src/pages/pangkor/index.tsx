import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import Pangkor from "./(components)/pangkor";
import MotionDiv from "../_components/motionDiv";
import {motion} from 'framer-motion';
import Image from "next/image";
export default function Page()
{
    return <div className="w-full h-full relative">
                <Header descColor="text-white" descText="BITCOIN EXOCTIC ISLAND" fromColor="from-white" toColor="from-white" headerText="PANGKOR" src="/pangkor/hero.png"/>
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
                    <Image className="rounded-2xl" src={"/pangkor/highway.png"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>
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
                    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
                    <div className="w-full h-full bg-cover bg-[url('/pangkor/airport1.png')] min-h-[20rem] lg:min-h-[50rem] rounded-xl"/>
                    <div className="w-full h-full bg-cover bg-[url('/pangkor/airport2.png')] min-h-[20rem] rounded-xl"/>

                    </div>


                </div>
            </MotionDiv>
           
        </div>
       
    </div>
}