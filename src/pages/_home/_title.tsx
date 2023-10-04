import { motion } from 'framer-motion';
import MotionDiv from "../_components/motionDiv";


export default function Title ()
{
    return (
        <MotionDiv>
            <div className="w-full  px-5 py-14">
                <div className="bg-gold flex flex-row justify-center gap-6  p-8 items-center rounded-lg">
                    <div
                        id="Line"
                        className="h-1 w-8 md:w-16 lg:w-32  grow bg-white"
                    />
                    <div className="text-center text-3xl lg:text-6xl font-bold min-w-max  text-white">
                        Our Islands
                    </div>
                    <div
                        id="Line1"
                        className=" w-8 md:w-16 lg:w-32 h-1 grow bg-white"
                    />
                </div>
            </div>
        </MotionDiv>
       
       
    )
}