import Image from "next/image";
import ColorizedText from "./components/colorizedText";

export default function Header()
{
    return <div className="w-full min-h-screen flex justify-center overflow-hidden bg-fixed bg-cover bg-[75%_45%] ">

        <div className="absolute min-w-full min-h-screen z-0 " >
            <Image
                priority
                objectPosition="90%"
                src="/graphics/bitcoinland.svg"
                layout="fill"
                objectFit="cover"
                alt="bg image"
            />
        </div>
        <div className="absolute min-w-full min-h-screen z-0 bg-fixed bg-black opacity-60 animate-bgFadeOut"/>

        <div className="flex max-md:flex-col xl:px-64  gap-5 items-center text-center z-10 px-5 max-md:justify-center md:justify-between">
        <div className="w-1/4 lg:w-2/12 max-md:hidden md:flex justify-center animate-fadeIn"><Image loading="eager" src={'/icon.png'} height={500} width={250} alt='company image'/> </div>

        <div className="flex flex-col gap-2 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl text-center z-10 "><ColorizedText animate text={"BITCOINLAND"} from={'from-white'} to={'to-gold'}/></h1>
            <h2 className="text-xl 2xl:text-4xl text-center z-10 text-gold font-semibold">RXT CAPITAL LIMITED</h2>
        </div> 

        <div className="w-1/4 lg:w-2/12 max-md:hidden md:flex justify-center animate-fadeIn "><Image loading="eager" src={'/company/rimaunangis.png'} height={500} width={250} alt='company image'/> </div>


    </div>
    </div>
}