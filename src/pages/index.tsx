import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from './components/button'
import { useContext, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion';
import { AppContext } from './state/state';
import World from './world';
import Games from './games';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {showNav} = useContext(AppContext);

  return (
    <div className={`flex flex-col ${showNav ? "" : "my-0"} transition-all ${inter.className}`}>
        <World/>
        <Games/>
      
    </div>
  )
}
