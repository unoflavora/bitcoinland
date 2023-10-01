import { Inter } from 'next/font/google'
import { useContext } from 'react'
import { AppContext } from './state/state';
import World from './world';
import EcoGlamping from './ecoGlamping';
import PengkalanHulu from './pengkalanHulu';
import Pangkor from './pangkor';
import Mentagor from './mentagor';
import Penang from './penang';
import Profile from './profile';
import Title from './title';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {showNav} = useContext(AppContext);

  return (
    <div className={`flex flex-col  ${showNav ? "" : "my-0"} transition-all ${inter.className}`}>
        <World/>
        <div className='flex flex-col mt-10'>
          <Profile/>
          <Penang/>
          <EcoGlamping/>
          <PengkalanHulu/>
          <Pangkor/>
          <Mentagor/>
        </div>
    </div>
  )
}
