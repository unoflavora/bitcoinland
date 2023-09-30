import MotionDiv from "./components/motionDiv";
import ColorizedText from "./components/colorizedText";
import {motion} from 'framer-motion';
import Image from "next/image";

export default function Stats()
{
  const stats = [{
    title: "What is Bitcoin",
    from : "from-red-500",
    to: "to-yellow-400",
    
    desc: "Out of the more than 19,000 cryptocurrencies in use today, Bitcoin (BTC) is one of the more well-known variants. It is a digital currency designed to function as money and a payment method independently of any other person, organisation, or institution, thereby dismissing the requirement for a third party to be involved in ﬁnancial transactions. "
  },
  {
    title: "When Was Bitcoin Founded",
    from : "from-blue-400",
    to: "to-grey-300",
    desc: "Since its public release in 2009, its value has risen abundantly. As of July 10th, 2023, the value of a single Bitcoin currency has climbed from its original value of $0 to $30,090.90"
  },
  {
    title: "How is Bitcoin Used",
    from : "from-blue-400",
    to: "to-grey-300",
    desc: "The Bitcoin transaction operates on a public decentralised ledger which makes it difﬁcult for those to falsify or reverse any transactions. As a form of digital currency, it operates by an individual owning a Bitcoin which can be distributed in smaller portions as payment for products. One Bitcoin can be divided up to eight decimal places, the smallest unit known as a satoshi. If this is accepted, Bitcoin can be divisible into more decimal places."
  }
]
  return <div className="flex flex-col gap-20 lg:gap-44 px-5 py-5 md:px-10 xl:px-36">

  <div className="flex flex-col max-md:gap-20 md:gap-10 md:flex-row lg:grid lg:grid-cols-3 place-content-center justify-center items-center">
    <motion.div
       viewport={{once : true}}
       initial={{opacity: 0}}
       whileInView={{opacity: 1}}
       className="flex justify-center w-full  h-auto">
      <Image className="w-full" src="/company/logo.png" width={200} height={100} alt="company logo"/>
    </motion.div>
    <div className="lg:col-span-2">
    <MotionDiv>
          <h1 className='text-5xl lg:text-7xl text-center md:text-start font-bold 
          text-transparent  bg-clip-text bg-gradient-to-r from-gold to-gold 
          '> Bitcoinland</h1>
          <p className="text-black lg:text-3xl md:text-start w-full "> 
          BitcoinLand is the brainchild of Rimaunangis $RXT. BitcoinLand.com was registered in 2011, with the vision of eventually creating a Bitcoin theme park or smart city, inspired by LegoLand.
          The idea for constructing the Bitcoin Iconic building and MasterplanCity came to live in 2023.
          </p>
    </MotionDiv>
    </div>
    
  </div>


   <MotionDiv>
      <div className="flex flex-col xl:gap-10 w-full 2xl:px-44">
        <h1 className='text-4xl lg:text-7xl text-center font-bold 
          text-transparent  bg-clip-text bg-gradient-to-r from-gold to-gold py-2
          '>Understanding Bitcoin</h1>
          <p className="text-black lg:text-3xl lg:text-center ">
          BitcoinLand is the brainchild of Rimaunangis $RXT. BitcoinLand.com was registered in 2011, with the vision of eventually creating a Bitcoin theme park or smart city, inspired by LegoLand.
          The idea for constructing the Bitcoin Iconic building and MasterplanCity came to live in 2023.
          </p>
      </div>
        
   </MotionDiv>

    <div className="flex flex-col gap-5 2xl:px-56">
    <h1 className='text-4xl lg:text-7xl text-center font-bold 
        text-transparent  bg-clip-text bg-gradient-to-r from-gold to-gold pb-5
        '>Innovating Bitcoin</h1>

        {stats.map((stat, i) => 
        <MotionDiv key={'stat' + i}>
            <div className={`py-10 px-5 text-3xl lg:text-5xl 2xl:text-7xl lg:px-10 lg:p-24 lg:py-36 h-full flex flex-col gap-4 bg-gradient-to-b from-[#F5F5F5] to-[#F5F5F5] rounded-2xl`}>
                <ColorizedText text={stat.title} from={'from-black'} to={'to-black'}/>
                <p className="text-black text-base lg:text-3xl">{stat.desc}</p>
            </div>
        </MotionDiv>)}


    </div>
  
  </div>
 
}