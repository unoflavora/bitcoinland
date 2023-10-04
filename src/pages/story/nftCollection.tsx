import { parentElementStyle } from "@/lib/classnames";
import Image from "next/image";

export default function NFTCollection()
{
    return <div className={'bg-gray-200  ' + parentElementStyle}>
        <h1 className="text-center font-bold text-gold text-4xl">NFT Collection</h1>
        <ul className="w-full px-5 flex flex-col md:text-lg  md:w-fit md:grid md:grid-cols-2 list-disc ">
            {
                ['Investment Program', 'Capital Investment guaranteed', 
                    'Game based revenue with token', 'Backed by fully-insured agricultural assets and plantation'].map((i, _) => 
                    <li className="text-black font-semibold " key={i}>{i}</li>)
            }
        </ul>

        <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 w-fit  justify-center items-center place-content-center py-24 lg:py-10 px-16 gap-16 rounded-2xl border border-stone-300">
            <Image className="w-full place-self-center lg:w-1/2" src="/story/farming-online.png" width={200} height={110} alt="farming online logo"/>
            <div className="w-full flex flex-col md:flex-row gap-8 max-sm:px-8 ">
                {['charolais', 'boer', 'coconut'].map((t) => <Image className="rounded-2xl" key={t} src={`/story/${t}.png`} width={180} height={110} alt={t}/>)}
            </div>
        </div>

        <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 w-fit justify-center items-center place-content-center  py-24 lg:py-10 px-16 gap-16 rounded-2xl border border-stone-300">
            <div className="w-full lg:w-1/2 place-self-center flex flex-col gap-3 text-center justify-center items-center">
                <Image className="w-full md:w-1/2 " src="/story/farming.png" width={200} height={110} alt="farming online logo"/>
                <h1 className="text-[#64686B]  text-3xl">Farming via NFT</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 max-sm:px-8 justify-center">
                {['angus', 'dorper', 'napier'].map((t) => <Image className="rounded-2xl" key={t} src={`/story/${t}.png`} width={180} height={110} alt={t}/>)}
            </div>
        </div>

        <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 w-fit justify-center items-center place-content-center  py-24 lg:py-10 px-16 gap-16 rounded-2xl border border-stone-300">
        <h1 className="text-[#64686B] text-center  text-3xl">Coming Soon</h1>
            <div className="flex flex-col md:flex-row gap-8 max-sm:px-8 justify-center">
                {['blue-fish', 'yellow-fish', 'white-fish'].map((t) => <Image className="rounded-2xl" key={t} src={`/story/${t}.png`} width={180} height={110} alt={t}/>)}
            </div>
        </div>
    </div>
}