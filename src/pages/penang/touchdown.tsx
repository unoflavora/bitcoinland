import Image from "next/image";

export default function TouchDown()
{
    return <div className=" flex flex-col gap-5 h-full">
        <div className="relative w-full h-fit">
            <Image className="rounded-2xl" src={"/penang/bg-town.png"} width={1200} height={300} alt=""/>
            <div className="w-full h-full absolute top-0 bg-black rounded-2xl opacity-50 z-0"/>
            <p className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-bold z-10 text-xl md:text-3xl ">Bitcoin Touchdown</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center  gap-5 w-full ">
        <div className="w-full h-full">
            <Image  className="max-md:hidden rounded-xl" src="/penang/george-town.png" width={480} height={376}  alt="penang site location"/>
        </div>

        <article className="w-full flex flex-col max-md:items-center justify-center  gap-5 ">
                <h1 className="text-5xl font-bold text-black">Site Location</h1>

                <div className="h-1 w-1/12 bg-gold"/>
                <Image className="md:hidden rouneded-xl" src="/penang/george-town.png" width={480} height={376} alt="penang site location"/>

                <p className="text-text-grey">
                The Core Area covers an area of 109.38 hectares bounded by the Straits of Melaka on the north-eastern cape of Penang Island, Lorong Love (Love Lane) to the North-West and Gat Lebuh Melayu and Jalan Dr Lim Chwee Leong to the South-West corner.
                </p>

                <p className="text-text-grey">
                There are more than 1700 historic buildings within this Core Zone aligned on four main streets of Pengkalan Weld (Weld Quay), Lebuh Pantai (Beach Street), Jalan Masjid Kapitan Keling (Pitt Street) and Lorong Love and several perpendicular streets  of Jalan Tun Syed Sheh Barakbah, Lebuh Light, Lebuh Bishop, Lebuh Gereja, Lebuh China, Lebuh Pasar, Lebuh Chulia, Lebuh Armenian and Lebuh Acheh.
                </p>

                <p className="text-text-grey">
                The Core Zone is protected by 150.04 hectares of the Buffer Zone, not including the Sea Buffer, bounded by the stretch of sea area around the harbour, Jalan Prangin to the south-west corner and Jalan Transfer to the North-West corner.                
                </p>

                <p className="text-text-grey">
                The site corresponds to the historic inner city of George Town, encompassing a rich collection of historic buildings of different styles.
                </p>

        </article>
        </div>
    </div>
}