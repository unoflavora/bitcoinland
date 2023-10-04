import { parentElementStyle } from "@/lib/classnames";
import Image from "next/image";

export default function Rimaunangis()
{
    return <div className={parentElementStyle}>
        <h1 className="text-4xl font-bold text-gold text-center ">RIMAUNANGIS PRODUCTION SDN BHD</h1>
        <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
            <div className="p-5 flex justify-center">
            <Image src="/story/rimaunangis_logo.png" width={500} height={500} alt="rimaunangis logo"/>

            </div>
            <p className="text-text-grey text-lg">
            Centered around the lifestyle domain, Rimaunangis Production offers diverse entertainment platforms that contribute to the enrichment of our comprehensive ecosystem.
            </p>

        </div>
            
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
        {[
            {
                title: 'RIMAUNANGIS TV',
                desc: 'Our TV platform provides opportunities for students to showcase their work on a global stage. Live-streaming platform that will host educational topics and entertainment.',
                imgUrl: 'rimaunangis_tv.png'
            },
            {
                title: 'RIMAUNANGIS ART',
                desc: 'Features artworks from artists all over the world through NFT collection.',
                imgUrl: 'rimaunangis_art.png'
            },
            {
                title: 'RIMAUNANGIS M',
                desc: 'Music streaming platform that will give you access to songs from inspiring international musicians.',
                imgUrl: 'rimaunangis_tv.png'
            },
        ].map((item, _) => <div key={item.title} className="flex flex-col justify-center items-center md:justify-start gap-2 h-full w-full">
            <div className="border border-stone-200 flex justify-center p-2 md:p-4 w-full h-40 aspect-video rounded-2xl">
                <Image className="w-auto h-full" src={'/story/' + item.imgUrl} width={150} height={250} alt="rimaunangis logo"/>
            </div>
            <h2 className="font-bold text-black text-lg">{item.title}</h2>
            <p className="text-text-grey">
                {item.desc}
            </p>
        </div>)}
        </div>
        
    </div>
}