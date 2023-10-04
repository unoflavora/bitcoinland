import Image from "next/image";

export default function Architecture()
{
    return <div className="w-full h-full flex justify-center items-center flex-col gap-5">
        <div className="relative w-fit  ">
            <Image className="rounded-xl" src="/penang/hotel.webp" width={900} height={500} alt="hotel plan"/>
            <div className=" absolute flex flex-col top-1/2 -translate-y-1/2 left-0 gap-2 w-1/2 text-black">
                <h2 className="font-bold md:text-xl bg-white"> New Beaches Fronthing Hotel Row </h2>
                <h1 className="font-bold text-2xl md:text-4xl bg-white">Activated and Serene Man Made Beaches</h1>
            </div>
        </div>

        <div className="flex max-sm:flex-col gap-5">
            {[
                {
                    title: "Reimagining Beachfronts",
                    url: "/penang/hotel1.webp"
                },
                {
                    title: "Vibrant Waterfront",
                    url: "/penang/hotel3.webp"
                },
                {
                    title: "Bitcoins on The Street",
                    url: "/penang/hotel2.webp"
                },
            ].map((pr, i) => <div className="flex flex-col justify-center items-center gap-3" key={pr.title}>
                <Image className="rounded-xl h-full" src={pr.url} width={900} height={500} alt="hotel plan"/>
                <h4 className="font-bold text-black">{pr.title}</h4>
            </div>)}
        </div>

        <div className="relative w-full flex flex-col md:flex-row rounded-xl bg-gradient-to-t md:bg-gradient-to-l from-gold ">
            <Image className="rounded-xl" src="/penang/canal-plan.webp" width={500} height={500} alt="hotel plan"/>
            <div className=" flex flex-col justify-center items-center  text-white">
                <h2 className="font-bold md:text-xl  p-3"> Permeable Through Canals </h2>
                <h1 className="font-bold text-2xl md:text-4xl  p-3">Canal City Boasting Vibrant Water Culture</h1>
            </div>
        </div>

        <div className="w-full h-full flex flex-col max-sm:gap-5 justify-center items-center md:grid md:grid-cols-2">
        <div className="text-zinc-900 text-4xl font-bold leading-10">Canals Frontage Permeability</div>
        <Image className="rounded-xl" src="/penang/canals.webp" width={1200} height={500} alt="hotel plan"/>

        </div>

        
    </div>
}