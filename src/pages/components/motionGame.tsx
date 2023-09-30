import {motion} from 'framer-motion'
import ColorizedText from './colorizedText'
import Image from 'next/image'
export default function MotionGame(props: {index : number, title: string, desc: string, from: string, to: string, imageUrl: string})
{
    return (
        <div className={`flex flex-col justify-center items-center ${props.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}  lg:h-full gap-10`}>
            <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0,scale: 0.6}}
                transition={{duration: .2}}
                className='w-full 2xl:w-1/2 h-full'
                viewport={{once: true}}
            >
                <Image src={props.imageUrl} width={800} height={250} alt={props.desc}/>
            </motion.div>

            <div className='flex flex-col  gap-3 md:w-3/4 '>
                <motion.div 
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0,scale: 0.6}}
                    transition={{duration: .2, delay: .3}}
                    viewport={{once: true}}
                    className='text-4xl lg:text-6xl flex flex-col gap-10'>
                    <ColorizedText text={props.title} from={props.from} to={props.to}/>
                    <motion.div 
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0,scale: 0.6}}
                    transition={{duration: .2, delay: .2}}
                    viewport={{once: true}}
                    className={`w-1/4  h-1 bg-gold`}>
                    
                    </motion.div>
                    <p className='text-base lg:text-2xl text-black'>{props.desc}</p>
                </motion.div>
                </div>
        </div>
    )
}