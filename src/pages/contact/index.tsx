import ColorizedText from "../_components/colorizedText";
import TemplateImage from "../_components/templateImage";
import Form from "./form";
import {motion} from 'framer-motion'

export default function Index()
{
    return <div className="w-full h-full flex justify-center pt-20  lg:gap-5 lg:py-44 px-5 md:px-24">
        <div className="max-w-7xl flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:justify-center lg:items-center">
        <div className="w-full  flex flex-col gap-20 md:gap-5 py-10 ">
            <motion.div 
                whileInView={{y: 0}}
                initial={{y: "-50%"}}
                viewport={{once: true}}
                className="text-4xl lg:text-5xl flex flex-col gap-2">
                <h1 className={"font-extrabold text-transparent mb-1.5 bg-clip-text bg-gradient-to-r py-2 from-grey to-gold "}>Contact Us</h1>
                    <p className="text-base lg:text-xl text-black">
                    Looking to make a media inquiry? Any feedback or sugestions? Fill out the form and we will get back to you!
                </p>
            </motion.div>
        </div>

        <motion.div
          whileInView={{y: 0}}
          initial={{y: "50%"}}
          viewport={{once: true}} 
        className="flex justify-center pb-10">
           <Form/>

        </motion.div>
        </div>
       
    </div>
}