import { Inter } from 'next/font/google'
import { useContext } from 'react'
import { AppContext } from './state/state';
import World from './world';
import Stats from './stats';
import Games from './games';
import PengkalanHulu from './pengkalanHulu';
import Pangkor from './pangkor';
import Mentagor from './mentagor';
import Penang from './penang';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {showNav} = useContext(AppContext);

  return (
    <div className={`flex flex-col gap-20 ${showNav ? "" : "my-0"} transition-all ${inter.className}`}>
        <World/>
        <Stats/>
        <Penang/>
        <Games/>
        <PengkalanHulu/>
        <Pangkor/>
        <Mentagor/>
    </div>
  )
}
