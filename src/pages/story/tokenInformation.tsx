import Image from "next/image"
export default function Token()
{
    return <div
    id="SectionRoot"
    className="bg-[#eaeaea] flex justify-center  w-full items-center  px-5 md:px-10 xl:px-64  py-10 lg:py-20 "
  >
    <div className="w-full flex flex-col gap-8 lg:gap-20 justify-center ">
            <h1 className="w-full text-center text-4xl font-bold  text-[#ca9c28]">
                Token Information
            </h1>

            <div className="flex flex-col gap-8 md:flex-row justify-center items-center">
                <div className="bg-black p-8 rounded-xl w-full flex justify-center items-center">
                <Image className="w-full h-full" src="/company/token.png" width={500} height={1000} alt="token"/>

                </div>
                <div className=" flex flex-col gap-3 items-start mx-1">
                    <div className="text-2xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d]">
                        $RXT TOKEN
                    </div>
                    <div
                        id="Line"
                        className="border-solid border-[#ca9c28] mb-1 w-10 h-1 shrink-0 border-t-4 border-b-0 border-x-0"
                    />
                    <div className="leading-[24px] text-[#64686b] w-full">
                        Rimaunangis $RXT Token pioneers real-world land and asset ownership in the
                        metaverse. Users can buy, sell, stake, earn, and develop NFT-based land
                        tiles mapped to actual map surfaces. Ownership unlocks opportunities to
                        farm, mine, build, collaborate, and transform ordinary land into something
                        greater. Rimaunangis $RXT Token seeks to elevate the metaverse concept to
                        a level with real-world and societal impacts.
                    </div>
             </div>
            </div>

            <h1 className="w-full text-center text-4xl font-bold  text-[#ca9c28]">
                $RXT Token Listing

            </h1>

            <div className="flex flex-col md:flex-row-reverse gap-8  justify-center items-center">
                <div className=" p-8 rounded-xl w-full flex justify-center items-center">
                <Image className="w-full h-full" src="/story/rxt_graph.png" width={500} height={1000} alt="token"/>

                </div>
                <ul className="list-disc text-text-grey px-5">
                        <li>Open price for listing $2.00 on 1st October 2022</li>
                        <li> All-time high was $15.30 on 7th October 2022</li>
                        <li>$RXT can be viewed in Coin Market Cap, CoinGecko, and Dropstab, Coinbase, Binance.</li>
                    </ul>
            </div>
        
    </div>
    
  </div>
  
}