import {motion} from 'framer-motion'
import TemplateImage from './templateImage'
import ColorizedText from './colorizedText'

export default function MotionGame(props: {index : number})
{
    return (
        <div className={`flex flex-col ${props.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}     lg:h-full gap-10`}>
            <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0,scale: 0.6}}
                transition={{duration: .2}}
                className='h-40 md:w-full md:h-44 lg:h-fit aspect-square'
                viewport={{once: true}}
            >
                <TemplateImage/>
            </motion.div>

            <div className='flex flex-col gap-3 '>
                    <motion.div 
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0,scale: 0.6}}
                        transition={{duration: .2, delay: .2}}
                        viewport={{once: true}}
                        className={`w-1/4  h-24 lg:aspect-square lg:h-auto`}>
                        <TemplateImage />
                    </motion.div>


                    <motion.div 
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0,scale: 0.6}}
                        transition={{duration: .2, delay: .3}}
                        viewport={{once: true}}
                        className='text-4xl lg:text-6xl'>
                        <ColorizedText text={"Stickman Hook"} from='from-blue-500' to='to-green-200'/>
                        <p className='text-base lg:text-2xl text-black'>Thrilling fun across hundreds of challenging levels! Swing your way through obstacles to skillfully complete each stage while collecting awesome kits. Get Hooked!</p>
                    </motion.div>

                </div>
        </div>
    )
}