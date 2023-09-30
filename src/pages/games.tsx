import MotionDiv from "./components/motionDiv";
import ColorizedText from "./components/colorizedText";
import MotionGame from "./components/motionGame";

export default function Games()
{
  const stats = [{
    title: "+500M Downloads",
    from : "from-red-500",
    to: "to-yellow-400",
    desc: "We are at the beginning of our mission to deliver fun and over 300 million players have already joined us"
  },
  {
    title: "15 games live",
    from : "from-blue-400",
    to: "to-grey-300",
    desc: "Creating amazing games is our DNA! Come and discover our latest games and future releases."
  }
]
  return <div className="flex flex-col gap-10 lg:gap-44 px-5 py-5 md:pb-20 md:px-10 lg:px-36">
  <div className="w-full 2xl:px-56 md:w-[70%]">
  <MotionDiv>
        <h1 className='text-5xl lg:text-7xl 2xl:text-9xl text-black text-start font-bold '> We create games with mad passion!</h1>
        <p className='text-base lg:text-3xl text-black'>Our story is fueled by creativity. That is why we put creative people at the heart of everything we do. Game making is an enjoyment that is shared endlessly, and with the world.</p>
   </MotionDiv>

  </div>

    <div className="flex flex-col gap-20 lg:gap-44 2xl:px-56 ">
        {stats.map((stat, i) => <MotionGame index={i} key={`games-port ${i}`}/>)}


    </div>
  
  </div>
 
}