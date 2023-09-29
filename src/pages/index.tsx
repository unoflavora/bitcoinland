import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from './components/button'
import { useContext, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion';
import { AppContext } from './state/state';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const {showNav, setShowNav} = useContext(AppContext);

  useEffect(() => {
    setShowNav(true)
  }, [])

  const onClickPlay = () => {
    window.scrollTo({top : 0, behavior: "smooth"});
    setIsPlaying(!isPlaying);
    setShowNav(isPlaying)
  }
  
  return (
    <main className={`flex flex-col bg-red-400 ${showNav ? "my-14" : "my-0"} transition-all ${inter.className}`}>
        <iframe className={`w-full min-h-screen grow ${isPlaying ? "pointer-events-auto" : 'pointer-events-none'} `} allowFullScreen src='http://127.0.0.1:5501/'/>
        <motion.button 
          animate={{left: isPlaying ? "-100%" : "50%"}}
          onClick={onClickPlay} className='absolute bottom-10 left-1/2 -translate-x-1/2'>
          <Button>
              Play
          </Button>
        </motion.button>

        <motion.button 
          animate={{scale: isPlaying ? 1 : 0}}
          onClick={onClickPlay} className={`absolute top-20 right-[5%] -translate-x-1/4`}>
          <Button>
              X
          </Button>
        </motion.button>

        <div className='bg-blue-500 min-h-screen px-5'>
          Tes
        </div>
    </main>
  )
}
