import Image from "next/image"

export default function Story()
{
    return <div className="flex flex-col gap-20   px-5 md:px-10 2xl:px-64">
    <div className="flex flex-col gap-5 md:gap-10  ">
        <h1 className='text-4xl text-center font-bold 
      text-transparent  bg-clip-text bg-gradient-to-r from-gold to-gold py-2
      '>Our Story</h1>
            <div className="flex flex-col gap-5 md:gap-10 md:grid md:grid-cols-2">
            <div className="w-full  flex   justify-center  items-center lg:items-stretch">
                <Image className="w-full 2xl:w-auto " src={"/icon.png"} width={400} height={400} alt="logo"/>
            </div>

            <div className="w-full flex flex-col  gap-10">
                <div className="text-4xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] self-start">
                    RXT Capital Limited
                </div>
                <div className="xl:text-lg leading-[24px] text-[#6b6e76] mb-8 w-full">
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
        
            <div className="w-full flex justify-center col-start-2">
                <Image src={"/company/rimaunangis.png"} width={400} height={400} alt="logo"/>
            </div>
            <div className="w-full flex flex-col justify-center  gap-10 lg:ml-20 col-start-1 row-start-2">
                <div className="text-4xl font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] text-start ">
                        10 Years in The Industry
                    </div>
                    <div className="text-lg xl:text-lg leading-[28px] lg:w-3/4 text-[#6b6e76] w-full">
                        Running for more than 10 years, Rimaunangis Sdn. Bhd. expand the market by
                        creating demand digitally through collaboration with satellite farmers.
                    </div>
                </div>
            </div>
            

    </div>
 
    </div>
}