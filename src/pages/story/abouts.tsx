import MotionDiv from "../components/motionDiv";
import ColorizedText from "../components/colorizedText";
import {motion} from 'framer-motion';
import Image from "next/image";

export default function About()
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
  return <div className="flex flex-col justify-center items-center gap-20 lg:gap-10 py-5 lg:py-20 px-5 md:px-10 xl:px-64">

   <MotionDiv>
      <div className="flex flex-col gap-10 w-full ">
        <h1 className='text-4xl text-center font-bold 
          text-transparent  bg-clip-text bg-gradient-to-r from-gold to-gold py-2
          '>Understanding Bitcoin</h1>
          <p className="text-black lg:text-lg lg:text-center self-stretch">
          BitcoinLand is the brainchild of Rimaunangis $RXT. BitcoinLand.com was registered in 2011, with the vision of eventually creating a Bitcoin theme park or smart city, inspired by LegoLand.
          The idea for constructing the Bitcoin Iconic building and MasterplanCity came to live in 2023.
          </p>
      </div>
        
   </MotionDiv>

    <div className="flex flex-col gap-5 ">
    <h1 className='text-4xl text-center font-bold 
        text-transparent  bg-clip-text bg-gradient-to-r from-gold to-gold pb-5
        '>Innovating Bitcoin</h1>

        {stats.map((stat, i) => 
        <MotionDiv key={'stat' + i}>
            <div className={`py-10 px-5 text-lg lg:px-10 lg:p-12  h-full flex flex-col gap-4 bg-gradient-to-b from-[#F5F5F5] to-[#F5F5F5] rounded-2xl`}>
                <ColorizedText text={stat.title} from={'from-black'} to={'to-black'}/>
                <p className="text-black text-base lg:text-lg">{stat.desc}</p>
            </div>
        </MotionDiv>)}


    </div>
  
  </div>
 
}