import { motion } from 'framer-motion';
import MotionDiv from "../_components/motionDiv";


export default function Title ()
{
    return (
        <MotionDiv>
            <div className="w-full  px-0 ">
                <div className="text-black flex flex-row justify-center gap-6  p-8 items-center rounded-lg">
                    <div
                        id="Line"
                        className="h-1 grow bg-gold"
                    />
                    <div className="text-center text-3xl md:text-6xl font-bold min-w-max  ">
                        Our Islands
                    </div>
                    <div
                        id="Line1"
                        className=" h-1 grow bg-gold"
                    />
                </div>
            </div>
        </MotionDiv>
       
       
    )
}