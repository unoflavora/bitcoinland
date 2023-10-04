import { parentElementStyle } from "@/lib/classnames";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';

export default function Islands()
{
    const islands = [
        {
            title: 'Penang',
            desc: "Bitcoin Resort City",
            imgUrl: "bg-[url('/penang/hero.png')]",
            href: '/penang'
        },
        {
            title: 'Pangkor',
            desc: "Bitcoin Exotic Island",
            imgUrl: "bg-[url('/pangkor/hero.png')]",
            href: '/pangkor'
        },
        {
            title: 'Mentagor',
            desc: "Bitcoin Exotic Island",
            imgUrl: "bg-[url('/mentagor/hero.png')]",
            href: '/mentagor'
        },
        {
            title: 'Pengkalan Hulu',
            desc: "Bitcoin Elephant Sanctuary",
            imgUrl: "bg-[url('/pengkalan-hulu/hero.png')]",
            href: '/pengkalan-hulu'
        },

]
    return <div className={parentElementStyle + " gap-20"}>

        {islands.map((island, i) => 
            <div key={island.title} className={`relative flex    ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-10 lg:gap-20 w-full h-full`}>\
                {(i === 0 || i === 2) && <Image className=' max-md:hidden   absolute top-0 right-0  '  src="/graphics/accessories1.svg"  width={300} height={300} alt=""/>}

                {i === 1 && <Image className='max-md:hidden z-0 absolute top-0 left-0 scale-x-[-1]'  src="/graphics/accessories1.svg"  width={300} height={300} alt=""/>}

            <div className={`w-full z-10 flex items-end rounded-2xl  min-h-[37rem] md:min-h-[20rem] md:min-w-[2rem] bg-cover ${island.imgUrl}`}>
                <div className="md:hidden flex flex-col gap-5 p-5 w-full h-fit bg-gray-800 bg-opacity-50 rounded-b-2xl">
                    <h1 className="text-[#DEDFDF] font-bold text-5xl">{`0${i+1}`}</h1>
                    <h2 className="text-white font-bold text-5xl">{island.title}</h2>
                    <h3 className="text-white font-semibold text-lg">{island.desc}</h3>
                    <Link className="text-gold font-semibold" href={island.href}>{`Explore more ->`}</Link>
                </div>
            </div>

            <div className="hidden z-10 md:flex flex-col gap-5 p-5 w-full h-fit">
                <h1 className="text-[#DEDFDF] font-bold text-5xl">{`0${i+1}`}</h1>
                <h2 className="text-black font-bold text-5xl">{island.title}</h2>
                <h3 className="text-black font-semibold text-lg">{island.desc}</h3>
                <Link className="text-gold font-semibold" href={island.href}>{`Explore more ->`}</Link>
            </div>
        </div>
        
        
        )}
 <motion.div 
                transition={{duration: .8, ease: "easeInOut"}}
                initial={{scale:0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                className="relative w-full h-auto flex justify-center  rounded-2xl">
                <Image className="w-full rounded-2xl" src={'/graphics/bitcoinland.svg'} width={900} height={500} alt="bitcoin triangle"/>
                <h1       
                    className="absolute left-5 xl:left-10 font-semibold top-[35%] origin-center text-left translate-1/2  text-3xl md:text-5xl xl:text-7xl leading-relaxed">
                    Bitcoinland <br/> Triangle
                </h1>
            </motion.div>
        
     
    </div>
}