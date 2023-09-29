import {motion, scroll , useScroll, useVelocity} from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/state';

export default function Navbar()
{
    const slideDistance = 100 // if we are sliding out a nav bar at the top of the screen, this will be it's height

    const threshold = 500 // only slide it back when scrolling back at velocity above this positive (or zero) value

    const { scrollY } = useScroll()

    const scrollVelocity = useVelocity(scrollY)

    const [isScrollingBack, setIsScrollingBack] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true) // true if the page is not scrolled or fully scrolled back
    const [isInView, setIsInView] = useState(true)
    const {showNav} = useContext(AppContext);

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

    return <motion.nav 
        animate={{y : isInView ? 0 : -slideDistance}}
        transition={{ duration: 0.2, ease: 'backInOut' }}
        className={`fixed flex justify-between py-2 px-5 bg-white w-full z-10 `}>
        <h1 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-orange-300 to-green-400">
            Company
        </h1>

    </motion.nav>
}