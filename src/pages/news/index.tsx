/* eslint-disable react/no-unescaped-entities */
import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import Image from "next/image";
import Link from "next/link";
import ColorizedText from "../_components/colorizedText";

export default function Page()
{
    return <div className={parentElementStyle}>
        <Image src="/icon.png" width={300} height={500} alt=""/>
        <h1 className="text-gold font-bold text-6xl"><ColorizedText from="from-black" to="to-gold" text={"RXT NEWS"} animate/></h1>
        <h2 className="text-black font-semibold text-4xl">
            RXT Token Concludes First Session of World Tour for Mega Project Bitcoinland Malaysia in Bangkok, Thailand
        </h2>
        <article className="text-text-grey text-lg flex flex-col gap-3 justify-center items-center">
            <p>
            Bangkok, Thailand--(Newsfile Corp. - August 5, 2023) - RXT Token, a prominent issuer in the cryptocurrency industry, announces the successful conclusion of the first session of its world tour for the preparation of the mega project, Bitcoinland Malaysia. The event took place in Bangkok, Thailand.
            </p>
            <Image src="/graphics/bitcoinland1.jpg" width={500} height={200} alt="image of press conferencce"/>
            <p>
            The purpose of this event was to introduce RXT's mega project property in Malaysia, known as Bitcoinland, to various key opinion leaders (KOLs) in Thailand. Additionally, RXT took the opportunity to unveil an upcoming web-based game that enables players to earn through gameplay.
            </p>

            <p>
            Thailand, recognized as a thriving crypto hub in Southeast Asia, provided the ideal backdrop for this meeting. Its robust infrastructure supports numerous crypto communities and has attracted several world-class exchanges to relocate their operations to the country.
            </p>

            <p className="w-full text-start">
            RXT values the opportunity to expand its network and connect with the vibrant Thai crypto community. This event served as a significant milestone in strengthening RXT's presence in the region.
            </p>
            <Image src="/graphics/bitcoinland2.jpg" width={500} height={200} alt="image of press conferencce"/>

            <p className="w-full text-start">
            Additionally, RXT took the opportunity to inform the entire Thai crypto community that it will soon be releasing a web-based Play-to-Earn game, <Link href={"https://Metaverse.RXT.World"}> Metaverse.RXT.World</Link>
            </p>
            <Image src="/graphics/bitcoinland3.jpg" width={500} height={200} alt="image of press conferencce"/>

        </article>
    </div>
}