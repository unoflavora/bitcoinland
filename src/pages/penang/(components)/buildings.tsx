import MotionDiv from "@/pages/_components/motionDiv";
import Image from "next/image";

export default function Buildings()
{
    return <div className=" flex flex-col gap-5 h-full">
        <div className="relative w-full h-fit">
            <Image className="rounded-2xl" src={"/penang/bg-town.webp"} width={1200} height={300} alt=""/>
            <div className="w-full h-full absolute top-0 bg-black rounded-2xl opacity-50 z-0"/>
            <p className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-bold z-10 text-xl md:text-3xl ">Iconic Building</p>
        </div>

        <div className="relative w-full  ">
        <div className="w-full flex flex-col gap-10">
            
        <MotionDiv>
            <Image className="w-full rounded-2xl" src="/penang/port.webp" width={900} height={500} alt="map of pengkalan hulu" loading="eager"/>
        </MotionDiv>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 lg:text-lg xl:text-xl text-black">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-4xl font-bold">Potential Penang Port Waterfront</h3>
                </div>
            </div>
            <p>
                The waterfront is the edge that separates the land and water. Historically, cities around the world have increased their footprints by inﬁlling the water for more land. In some cases, the water has disappeared at the end of the process. This one-sided expansion and the edge caused cities to overlook the value of the waterfront. This proposal focuses on the revitalisation of the Penang Island’s water edges by uplifting its duality and adds value to development. Around the world, the water edges are often used for industrial development.
            </p>

            <p>
                When the wharf era had passed away, the edge is often left with warehouses and factories. The harbours have often suffered from the same problem of neglect and lack of development. We are proposing to reclaim the water edges as a great asset. In this design exploration, we set out to address the question of people’s access to the water. Transforming Penang Port as a well-developed open spaces where people can experience the power of water.
            </p>
        </div>
        </div>
        
    </div>

    </div>
}