import { parentElementStyle } from "@/lib/classnames";
import Image from "next/image";

export default function FarmingOnline() {
    const stories = [
        {
            title: '"YOU FARM ON-LINE,WE DO IT ON-LAND."',
            desc : 'Founded in Dubai, United Arab Emirates in early 2022 by Khalifa AlJaziri, Farming Online  aims to bring food sustainability to the Middle East through tokenization and smart-farming technologies. Farming Online is also expanding its business in the region and globally.'
        },
        {
            title : "FOOD SUSTAINABILITY, IOT & METAVERSE",
            desc: "Farming on-line’s approach to the metaverse uses technology that increases the effectiveness and efficiency of collecting, storing, analyzing, and using data in agriculture and food  production that is in line with shariah principles. Farming on-line allows agricultural  practitioners and farming communities to effortlessly acquire up-to-date information and thus make better decisions in their daily farming (smart farming)."
        }
    ]
    return <div className={parentElementStyle}>
        <Image className="w-full" src="/story/farming-online.png" width={340} height={110} alt="farming online logo"/>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
        {stories.map((story, _) => <div key={story.title} className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-black">{story.title}</h1>
            <p className="text-text-grey">{story.desc}</p>
        </div>)}

        </div>
    </div>
}