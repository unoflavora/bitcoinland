export default function Index()
{
    return (
        <div
        id="SectionRoot"
        className="w-full flex justify-center px-4 max-sm:pt-20 md:pt-32 lg:pt-44 pb-10"
        >
        <div className="flex flex-col gap-4 lg:gap-10 max-w-4xl ">
        <div className="text-center text-2xl font-['Inter'] font-bold tracking-[-0.84] leading-[32px] text-[#161a1d]  mb-6">
            Our Story
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
        <img src="https://file.rendit.io/n/Qjb6Wln7nUQudjufUuVW.png" id="RXTTokenLogo" className="p-5 w-full aspect-square h-auto"/>
            <div className="flex flex-col gap-4">
            <div className="text-2xl xl:text-5xl font-['Inter'] font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] self-start">
                RXT Capital Limited
            </div>
            <div className="font-['Inter'] xl:text-lg leading-[24px] text-[#6b6e76] mb-8 w-full">
                Having been originally registered with EQS Group AG in Georgia, Rimaunangis
                Digital LLC has transferred its operations to Hong Kong and undergone a
                rebranding to become RXT Capital Limited. This transformation was
                subsequently recognized by the <br />
                FinTech Hong Kong Authority, and the company has also established a partnership
                with Hong Kong Invest. <br />
                <br />
                Through Metaverse Project, RXT Capital Limited collaborates with Rimaunangis
                Sdn. Bhd. and Rimaunangis Productions Sdn. Bhd. to form one complete ecosystem
                on Metaverse.
            </div>
            </div>
           
        </div>
        <div className="flex flex-col gap-4 md:flex-row-reverse items-center h-full">
            <img src="https://file.rendit.io/n/JzW2DoSSofixUn5pHC6J.png" id="Rimaunangissdnbhd" className="mb-6"/>

            <div className="flex flex-col gap-4 ">
                <div className="text-2xl xl:text-5xl font-['Inter'] font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] self-start">
                        10 Years in The Industry
                    </div>
                    <div className="text-lg xl:text-lg font-['Inter'] leading-[28px] lg:w-3/4 text-[#6b6e76] w-full">
                        Running for more than 10 years, Rimaunangis Sdn. Bhd. expand the market by
                        creating demand digitally through collaboration with satellite farmers.
                    </div>
                </div>
        </div>
   
        </div>

     
       
        </div>

    )
}