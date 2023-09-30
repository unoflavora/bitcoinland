import MotionDiv from "./components/motionDiv";
import ColorizedText from "./components/colorizedText";

export default function Games()
{
  const stats = [{
    title: "+500M Downloads",
    from : "from-red-100",
    to: "to-yellow-100",
    desc: "We are at the beginning of our mission to deliver fun and over 300 million players have already joined us"
  },
  {
    title: "15 games live",
    from : "from-slate-100",
    to: "to-grey-100",
    desc: "Creating amazing games is our DNA! Come and discover our latest games and future releases."
  }
]
  return <div className="flex flex-col gap-20">
   <MotionDiv>
        <h1 className='text-5xl text-black text-center font-bold'> Discover our mad dream of making the world play!</h1>
   </MotionDiv>

    <div className="flex flex-col gap-5">
        {stats.map((stat, i) => <MotionDiv key={'stat' + i}>
            <div className={`py-10 px-5 flex flex-col gap-4 bg-gradient-to-b from-red-100 to-yellow-100 rounded-2xl`}>
                <ColorizedText text={"+500M Download"} from="from-red-600" to="to-red-300"/>
                <p className="text-black">We are at the beginning of our mission to deliver fun and over 300 million players have already joined us</p>
            </div>
        </MotionDiv>)}
    </div>
  
  </div>
 
}