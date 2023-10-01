import Image from "next/image";

export default function Penang()
{
    return <div
  id="BitcoinPenangRoot"
  className=" bg-[#f5f5f5] flex flex-col justify-center items-center gap-16 w-full px-5 md:px-16 py-20 text-center"
>
  <div className="text-5xl font-['Inter'] font-bold tracking-[-1.46] leading-[52px] text-[#ca9c28] self-center">
    Bitcoin Penang
  </div>
  <div className="flex flex-col gap-6 items-start mx-1">
    <div className="text-2xl font-['Inter'] font-bold tracking-[-0.84] leading-[32px] text-[#161a1d]">
      Penang Bitcoin Landmark
    </div>
    <Image src={"/graphics/bitcoinland2.png"} width={1500} height={500} alt="bitcoinland concept"/>
  </div>
  <div className="flex flex-col gap-4 items-start">
    <div className="text-2xl font-['Inter'] font-bold tracking-[-0.84] leading-[32px] text-[#161a1d] ml-1">
      Penang Bitcoin Masterplan
    </div>
    <Image src={"/graphics/bitcoinland1.png"} width={1500} height={500} alt="bitcoinland concept"/>

  </div>
</div>

}