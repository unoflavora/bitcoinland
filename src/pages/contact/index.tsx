import ColorizedText from "../components/colorizedText";
import TemplateImage from "../components/templateImage";
import Form from "./form";
import {motion} from 'framer-motion'

export default function Index()
{
    return <div className="w-full h-full flex justify-center  lg:gap-20 lg:py-44 px-5 md:px-24">
        <div className="max-w-7xl flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:justify-center lg:items-center">
        <div className="w-full  flex flex-col gap-20 md:gap-5 py-24 ">
            <motion.div
                whileInView={{y: 0}}
                initial={{y: "-50%"}}
                viewport={{once: true}}
                 className="w-full h-56 lg:h-64">
            <TemplateImage/>

            </motion.div>

            <motion.div 
                whileInView={{y: 0}}
                initial={{y: "50%"}}
                viewport={{once: true}}
                className="text-4xl lg:text-5xl flex flex-col gap-5 shrink grow-0">
                <ColorizedText from="from-grey" to="to-gold" text={"Who you gonna call ?"}/>
                <p className="text-base lg:text-xl text-black">
                    Looking to make a media inquiry? Any feedback or sugestions? Fill out the form and we will get back to you!
                </p>
            </motion.div>
        </div>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className="flex justify-center ">
            <div className="w-full">
                <Form/>

            </div>

        </motion.div>
        </div>
       
    </div>
}