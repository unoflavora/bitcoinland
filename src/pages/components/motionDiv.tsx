import { ReactNode } from "react";
import {motion} from 'framer-motion';

export default function MotionDiv(props : {children: ReactNode})
{
    return <motion.div 
    initial={{opacity: 0, y:100}}
    whileInView={{ opacity: 1, y: 0}} className='bg-white flex flex-col gap-5 lg:gap-10 '
    transition={{ease: [.17,.22,.0,1.57], duration: .8,}}
    viewport={{once: true}}

    >
      {props.children}
    </motion.div>
}