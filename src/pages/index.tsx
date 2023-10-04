import { Inter } from 'next/font/google'
import { useContext } from 'react'
import { AppContext } from './state/state';
import World from './_home/_world';
import EcoGlamping from './_home/_ecoGlamping';
import PengkalanHulu from './_home/_pengkalanHulu';
import Pangkor from './_home/_pangkor';
import Mentagor from './_home/_mentagor';
import Penang from './_home/_penangHome';
import Profile from './_home/_profile';
import Header from './_components/header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {showNav} = useContext(AppContext);

  return (
    <div className={`flex flex-col  ${showNav ? "" : "my-0"} transition-all ${inter.className}`}>
        <Header 
            homePage
            descText='RXT CAPITAL LIMITED'
            descColor='text-gold' 
            src='/graphics/bitcoinland.svg'
            fromColor='from-white'
            toColor='to-gold'
            headerText="BITCOINLAND"
          />

          <Profile/>

          <World/>
          <div className='flex flex-col mt-10'>

          <Penang/>
          <EcoGlamping/>
          <PengkalanHulu/>
          <Pangkor/>
          <Mentagor/>
        </div>
    </div>
  )
}
