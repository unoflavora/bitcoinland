import {easeInOut, motion, scroll , useScroll, useVelocity} from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/state';
import { Turn as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar()
{
    const links = ["Home", "Our Story"];

    const slideDistance = 100 // if we are sliding out a nav bar at the top of the screen, this will be it's height

    const threshold = 500 // only slide it back when scrolling back at velocity above this positive (or zero) value

    const { scrollY } = useScroll()

    const scrollVelocity = useVelocity(scrollY)

    const [isScrollingBack, setIsScrollingBack] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true) // true if the page is not scrolled or fully scrolled back
    const [isInView, setIsInView] = useState(true)
    const {showNav} = useContext(AppContext);
    const [isOpen, setOpen] = useState(false)

    const [navVisible, setNavVisible] = useState(false);

    useEffect(
        () =>
            scrollVelocity.on('change', (latest) => {
                if (latest > 0) {
                    setIsScrollingBack(false)
                    return
                }
                if (latest < -threshold) {
                    setIsScrollingBack(true)
                    return
                }
            }),
        []
    )

    useEffect(
        () => scrollY.on('change', (latest) => setIsAtTop(latest <= 0)),
        []
    )

    useEffect(
        () => setIsInView(isScrollingBack || isAtTop),
        [isScrollingBack, isAtTop, showNav]
    )

    useEffect(() => {
        if(isOpen)
        {
            document.body.style.overflow = "hidden";
        }
        else
        {
            document.body.style.overflow = "scroll";

        }
    })


    return <>
        <motion.nav 
            animate={{y : isInView ? 0 : -slideDistance}}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed flex flex-col w-full z-10`}>
            <div className='flex w-full items-center px-5 md:py-3 lg:py-5 transition-all drop-shadow-sm shadow-[#00000026] bg-grey lg:px-24  justify-between'>
     
            <Link href="/" onClick={() =>setOpen(false)}  className='h-auto w-auto md:w-10 lg:w-14'>
                <Image className='w-full h-full' src="/icon.png" width={30} height={25} alt='company logo'/>

            </Link>

            <div className='md:hidden flex h-full justify-center'>
                <Hamburger toggled={isOpen} toggle={setOpen} rounded distance='lg' color="white" size={28} direction='left'/>
            </div>
            <ul className='max-sm:hidden flex gap-10 items-center lg:text-2xl'>
                {links.map((title, i) => 
                <Link  onClick={() =>setOpen(false)} href={`/${title !== "Home" ? title : ""}`} key={"link " + i}>
                    {title}
                </Link>)}

                <Link 
                    href="/contact"
                    className={`p-2 px-4  rounded-md  bg-gold text-center text-white`}
                    >
                    Contact Us
                </Link>
            </ul>

            </div>

            <motion.ul layout
                initial={{x: "100%"}}
                animate={{x: isOpen ? 0 : "100%"}}
                transition={{ease : easeInOut, duration: .2}}
                onAnimationComplete={(e) => setNavVisible(isOpen) }
                className={`absolute translate-x-full flex flex-col top-12 text-3xl gap-10  bg-grey text-white b min-h-screen w-screen py-10 px-5 z-10`}>

                {links.map((title, i) => 
                <Link onClick={() =>setOpen(false)} href={`/${title !== "Home" ? title : ""}`} key={"link " + i}>
                    <motion.li 
                        animate={{x: isOpen ? 0 : "200%"}}
                        transition={{delay : .1 * i, duration: .35}}
                        key={"link " + i}
                        className={`border-b-[0.15rem] py-5 `}
                        >
                        {title}
                    </motion.li>
                </Link>

                )}

                <Link onClick={() =>setOpen(false)} href={`/contact`}>
                    <motion.li 
                        animate={{x: isOpen ? 0 : "200%"}}
                        transition={{delay : .1 * 2, duration: .35}}
                        key={"link " + 3}
                        className={`border-b-[0.15rem] py-3 text-xl rounded-md  bg-yellow text-center text-black`}
                        >
                        Contact Us
                    </motion.li>
                </Link>
                
                
            </motion.ul>
    </motion.nav>


    </>
}