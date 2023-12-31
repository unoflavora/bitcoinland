import MotionDiv from "../../_components/motionDiv";
import ColorizedText from "../../_components/colorizedText";
import MotionImageDesc from "../../_components/motionImageDesc";
import Image from "next/image";
import {easeInOut, motion} from 'framer-motion';

export default function EcoGlamping()
{
  const glamping = [{
    imageUrl: "/mentagor/premium-chalets.webp",
    title: "Eco Premium Chalets",
    from : "from-gold",
    to: "to-black",
    desc: "Chalets built in a forest overlooking a beach and the sea offer a captivating and serene retreat. These accommodations provide a harmonious blend of natural beauty and comfort. Imagine staying in a cozy chalet nestled among the trees, with the tranquil ambiance of the forest and the breathtaking view of the beach and sea just a gaze away. Such a setting allows for a peaceful escape, where visitors can enjoy the sights and sounds of nature while also indulging in the relaxing atmosphere of a seaside getaway."
  },
  {
    imageUrl: "/mentagor/luxurious-chalets.webp",
    title: "Luxurious Tree-Top Chalets",
    from : "from-black",
    to: "to-gold",
    desc: "This beautifully designed chalets that are elevated within the treetops and surrounded by lush foliage offer a unique and enchanting experience. These accommodations often provide stunning views of the surrounding nature, a sense of privacy, and a feeling of being one with the environment.",
  },
  {
    imageUrl: "/mentagor/eco-tree-top.webp",
    title: "Eco-‘Tree-Top’ Premium Chalets",
    from : "from-gold",
    to: "to-black",
    desc: "These accommodations are perched among the treetops, offering panoramic views of the surrounding landscape. These chalets often incorporate eco-conscious features such as energy-efficient design, use of sustainable materials that has a minimal environmental impact.",
  },
]
  return <div id='eco-glamping' className=" overflow-hidden flex flex-col  gap-10 lg:gap-20 py-20 md:pb-20 px-5 md:px-16 lg:px-36 ">


  <div className="relative w-full 2xl:px-56 md:w-[70%]">
  <div className="absolute flex  z-0 max-lg:left-0 lg:right-0 max-lg:-top-20 opacity-30 -top-0">
    <Image className="md:w-56 " src={"/graphics/tree_big.svg"} width={125} height={100} alt="coin decoration" loading="eager"/>
    <Image className="max-sm:hidden" src={"/graphics/tree_smaller.svg"} width={80} height={100} alt="coin decoration " loading="eager"/>
  </div>
  <MotionDiv>
        <h1 className='text-5xl lg:text-7xl 2xl:text-9xl text-gold text-start font-bold'> Eco Glamping</h1>
   </MotionDiv>

  </div>

    <div className="flex flex-col gap-20 lg:gap-44 2xl:px-56 ">
        {glamping.map((stat, i) => <MotionImageDesc index={i} desc={stat.desc} title={stat.title} from={stat.from} to={stat.to} imageUrl={stat.imageUrl} key={`games-port ${i}`}/>)}
    </div>    
  
  </div>
 
}