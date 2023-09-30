import MotionDiv from "./components/motionDiv";
import ColorizedText from "./components/colorizedText";

export default function Stats()
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
  return <div className="flex flex-col gap-10 px-5 py-5 md:px-10 lg:px-36">
   <MotionDiv>
        <h1 className='text-5xl lg:text-7xl 2xl:text-9xl text-black text-center font-bold pb-10'> Discover our mad dream of making the world play!</h1>
   </MotionDiv>

    <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 gap-5 2xl:px-56">
        {stats.map((stat, i) => <MotionDiv key={'stat' + i}>
            <div className={`py-10 px-5 text-3xl lg:text-5xl 2xl:text-7xl lg:px-10 lg:p-24 lg:py-36 h-full flex flex-col gap-4 bg-gradient-to-b from-red-100 to-yellow-100 rounded-2xl`}>
                <ColorizedText text={stat.title} from={stat.from} to={stat.to}/>
                <p className="text-black text-base lg:text-3xl">{stat.desc}</p>
            </div>
        </MotionDiv>)}


    </div>
        
    <div className="w-full 2xl:px-56">
      <div className="bg-gray-300 w-full h-36 lg:h-96 rounded-xl flex justify-center items-center ">
          Image will appear here
      </div>
    </div>
  
  </div>
 
}