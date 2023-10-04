import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import Pangkor from "./(components)/pangkor";
import MotionDiv from "../_components/motionDiv";
import {motion} from 'framer-motion';
import Image from "next/image";
export default function Page()
{
    return <div className={parentElementStyle}>
        <Header descColor="text-white" descText="BITCOIN EXOCTIC ISLAND" fromColor="from-white" toColor="from-white" headerText="PANGKOR" src="/pangkor/hero.png"/>
        <Pangkor/>

        <div className="flex flex-col gap-4 items-start">
                <MotionDiv>
                <div className="text-2xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] ml-1">
                Penang Bitcoin Masterplan
                </div>

                </MotionDiv>

                <motion.div
                    transition={{ease: "linear", duration: .6}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                >
                    <Image src={"/graphics/bitcoinland1.png"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>
                </motion.div>

            </div>
    </div>
}