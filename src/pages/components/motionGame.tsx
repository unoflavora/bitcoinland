import {motion} from 'framer-motion'
import ColorizedText from './colorizedText'
import Image from 'next/image'
export default function MotionGame(props: {index : number, title: string, desc: string, from: string, to: string, imageUrl: string})
{
    return (
        <div className={`flex flex-col justify-center items-center xl:gap-20  ${props.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}  lg:h-full gap-10`}>
            <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0,scale: 0.6}}
                transition={{duration: .2}}
                viewport={{once: true}}
                className='w-full'
            >
                <Image className='rounded-xl w-full' src={props.imageUrl} width={800} height={250} alt={props.desc}/>
            </motion.div>

            <div className='flex flex-col  gap-3 md:w-3/4 '>
                <motion.div 
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0,scale: 0.6}}
                    transition={{duration: .2, delay: .3}}
                    viewport={{once: true}}
                    className='text-4xl lg:text-6xl flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                    <ColorizedText text={props.title} from={props.from} to={props.to}/>

                    <motion.div 
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0,scale: 0.6}}
                    transition={{duration: .2, delay: .2}}
                    viewport={{once: true}}
                    className={`w-1/4  h-1 bg-gold`}>
                    
                    </motion.div>
                    </div>

                    <p className='text-base lg:text-2xl text-black'>{props.desc}</p>
                </motion.div>
                </div>
        </div>
    )
}