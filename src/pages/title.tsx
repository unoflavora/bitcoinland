import { motion } from 'framer-motion';
import MotionDiv from './components/motionDiv';


export default function Title ()
{
    return (
        <MotionDiv>
            <div className="w-full px-5 md:px-16 lg:px-36 py-14">
                <div className="bg-gold flex flex-row justify-center gap-6  w-full p-8 items-center rounded-lg">
                    <div
                        id="Line"
                        className="w-full h-1 bg-white"
                    />
                    <div className="text-center text-3xl lg:text-6xl font-bold min-w-max  text-white">
                        Our Islands
                    </div>
                    <div
                        id="Line1"
                        className="w-full h-1 bg-white"
                    />
                </div>
            </div>
        </MotionDiv>
       
       
    )
}