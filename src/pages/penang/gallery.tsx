import Image from "next/image";
import {easeInOut, motion} from 'framer-motion';
import MotionDiv from "../_components/motionDiv";

export default function Gallery()
{
    return <div
            id="BitcoinPenangRoot"
            className=" relative overflow-hidden  flex flex-col justify-center items-center gap-8 w-full px-5 md:px-16 py-20 text-center">
           
           <div className="w-full flex justify-center items-center gap-4">
            <div className="h-1 grow bg-gold"/>
           <motion.h1
                transition={{duration: 1}}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once : true}} 
                className="relative text-2xl md:text-4xl lg:text-5xl text-black text-start font-bold tracking-[-1.46] leading-[52px] self-start">
                Bitcoin Penang
               
            </motion.h1>
            <div className="h-1 grow bg-gold"/>

           </div>

            <div className="relative flex flex-col gap-6 items-start mx-1 ">


                <MotionDiv>
                    <div className="text-2xl font-bold tracking-[-0.84] z-10 leading-[32px] text-[#161a1d]">
                    Penang Bitcoin Landmark
                    </div>
                </MotionDiv>
                <motion.div
                    transition={{ease: "linear", duration: .6}}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once : true}}
                    className="relative "
                >


                <Image className="z-20" src={"/graphics/bitcoinland2.png"} width={1500} height={500} alt="bitcoinland concept" loading="eager"/>

                </motion.div>
            </div>
            
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

            <div className="flex flex-col rounded-xl w-full">
            <div className="rounded-xl bg-[url('/penang/bitcoin-international.png')] bg-cover w-full h-96 2xl:h-[800px] ">
                <div className="max-md:hidden bg-gradient-to-l flex justify-end text-end px-5 items-center from-black w-full h-full">
                    <h1 className="text-3xl xl:text-5xl w-1/2 font-semibold">International Presence to Heritage City</h1>
                </div>
            </div>
            <div className="md:hidden flex justify-center bg-grey bg-opacity-60 py-5">
                <h1 className="text-2xl w-1/2 font-semibold">International Presence to Heritage City</h1>

            </div>

            </div>

            <div className="flex flex-col rounded-xl w-full">
            <div className="bg-[url('/penang/landmark.png')] bg-[60%] bg-cover w-full h-96 2xl:h-[800px] ">
                <div className="max-md:hidden bg-gradient-to-r flex justify-start text-start items-center from-black w-full h-full">
                    <h1 className="text-3xl xl:text-5xl px-5 w-1/2 font-semibold">Penang Bitcoin Landmark</h1>
                </div>
            </div>
            <div className="md:hidden flex justify-center bg-grey bg-opacity-60 py-5">
                <h1 className="text-2xl w-1/2 font-semibold">Penang Bitcoin Landmark</h1>

            </div>

            </div>

            <motion.div 
                transition={{duration: .8, ease: easeInOut}}
                initial={{scale:0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                className="relative w-full h-auto flex justify-center rounded-2xl">
                <Image className="w-full" src={'/graphics/bitcoinland.svg'} width={900} height={500} alt="bitcoin triangle"/>
                <h1       
                    className="absolute left-5 xl:left-10 font-semibold top-[35%] origin-center text-left translate-1/2  text-2xl md:text-3xl xl:text-5xl leading-relaxed">
                    Bitcoinland <br/> Triangle
                </h1>
            </motion.div>
</div>

}