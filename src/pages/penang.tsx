import Image from "next/image";
import {motion} from 'framer-motion';
import MotionDiv from "./components/motionDiv";
import Title from "./title";

export default function Penang()
{
    return <div
            id="BitcoinPenangRoot"
            className=" relative overflow-hidden bg-[#f5f5f5] flex flex-col justify-center items-center gap-16 w-full px-5 md:px-16 py-20 text-center">
            <Title/>
           
            <motion.h1
                transition={{duration: 1}}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once : true}} 
                className="relative text-5xl lg:text-7xl 2xl:text-9xl text-gold text-start font-bold tracking-[-1.46] leading-[52px] self-center">
                Bitcoin Penang
               
            </motion.h1>
            <div className="relative flex flex-col gap-6 items-start mx-1 ">
                <div className="absolute flex flex-col z-0 -right-20 -top-40">
                    <Image src={"/graphics/coin1.svg"} width={150} height={100} alt="coin decoration"/>
                    <Image className="max-sm:hidden" src={"/graphics/coin2.svg"} width={100} height={100} alt="coin decoration"/>
                </div>
                <MotionDiv>
                    <div className="text-2xl font-bold tracking-[-0.84] z-10 leading-[32px] text-[#161a1d]">
                    Penang Bitcoin Landmark
                    </div>
                </MotionDiv>
                <motion.div
                    transition={{ease: [.22,.2,.01,1.37], duration: 1}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                    className="relative "
                >
                    <Image className="z-20" src={"/graphics/bitcoinland2.png"} width={1500} height={500} alt="bitcoinland concept"/>

                  

                </motion.div>
            </div>
            
            <div className="flex flex-col gap-4 items-start">
                <MotionDiv>
                <div className="text-2xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] ml-1">
                Penang Bitcoin Masterplan
                </div>

                </MotionDiv>

                <motion.div
                    transition={{ease: [.22,.2,.01,1.37], duration: 1}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                >
                    <Image src={"/graphics/bitcoinland1.png"} width={1500} height={500} alt="bitcoinland concept"/>
                </motion.div>

            </div>
</div>

}