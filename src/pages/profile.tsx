import {motion} from 'framer-motion';
import Image from 'next/image'
import MotionDiv from './components/motionDiv';

export default function Profile()
{
    return (
        <div className='w-full flex bg-gradient-to-b from-[#efd492fd] to-white justify-center items-center py-20 2xl:py-44 px-5 md:px-14 xl:px-36 2xl:px-96'>
            <div className="flex flex-col  max-md:gap-5 md:gap-10 lg:gap-20  md:flex-row justify-center items-center">
                <motion.div
                viewport={{once : true}}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                className="w-full max-w-xs">
                    <Image className="w-full" src="/company/logo.png" width={200} height={100} alt="company logo" loading="eager"/>
                </motion.div>

                <div className="lg:col-span-2">
                    <MotionDiv>
                            <h1 className='text-5xl 2xl:text-7xl text-gold text-start font-bold 
                            '> Bitcoinland</h1>
                            <p className="text-black lg:text-lg md:text-start w-full "> 
                            BitcoinLand is the brainchild of Rimaunangis $RXT. BitcoinLand.com was registered in 2011, with the vision of eventually creating a Bitcoin theme park or smart city, inspired by LegoLand.
                            The idea for constructing the Bitcoin Iconic building and MasterplanCity came to live in 2023.
                            </p>
                    </MotionDiv>
                </div>
            </div>
        </div>
        
    )
}