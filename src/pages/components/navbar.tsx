import {easeInOut, motion, scroll , useScroll, useVelocity} from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/state';
import { Turn as Hamburger } from 'hamburger-react'
import Link from 'next/link';

export default function Navbar()
{
    const links = ["Home", "Contact Us"];

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
        () => setIsInView(showNav && (isScrollingBack || isAtTop)),
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
            <div className='flex w-full items-center px-5 md:py-3 lg:py-5 bg-blue-500 xl:px-24  justify-between'>
            <h1 className="font-extrabold text-transparent text-2xl lg:text-4xl mb-1.5 bg-clip-text bg-gradient-to-r from-orange-300 to-green-400">
                Company
            </h1>
            <div className='md:hidden flex h-full justify-center'>
                <Hamburger toggled={isOpen} toggle={setOpen} rounded distance='md' color="black" size={28} direction='left'/>
            </div>
            <ul className='max-sm:hidden flex gap-10 lg:text-2xl'>
                {links.map((title, i) => 
                <li key={"link " + i}>
                    {title}
                </li>)}
            </ul>

            </div>

            <motion.ul layout
                animate={{x: isOpen ? 0 : "100%"}}
                transition={{ease : easeInOut, duration: .2}}
                onAnimationComplete={(e) => setNavVisible(isOpen) }
                className={`absolute flex flex-col top-12 text-3xl gap-10 text-black bg-slate-200 b min-h-screen w-screen py-10 px-5 z-10`}>

                {links.map((title, i) => <li 
                    key={"link " + i}
                    className={`${isOpen ? 'translate-x-0' : "translate-x-[100%]"} transition-all `}
                    >
                    {title}
                </li>)}
                
            </motion.ul>
    </motion.nav>


    </>
}