import { parentElementStyle } from "@/lib/classnames";
import Header from "../_components/header";
import Image from "next/image";
import Link from "next/link";
import ColorizedText from "../_components/colorizedText";

export default function Page()
{
    const news = [

    {
        title: "Bloomberg",
        image: "bg-[url('https://logowik.com/content/uploads/images/bloomberg-media4038.jpg')]",
        url: "https://www.bloomberg.com/press-releases/2023-08-06/rxt-token-concludes-first-session-of-world-tour-for-mega-project-bitcoinland-malaysia-in-bangkok-thailand"
    },
    {
        title: "Yahoo Finance",
        image: "bg-[url('/company/yahoo.png')]",
        url: "https://finance.yahoo.com/news/rxt-token-concludes-first-session-024900442.html"
    },
    {
        title : "RXT 世界巡回路演在曼谷与泰国加密社区见面",
        image: "bg-[url('http://net.itlans.cn/uploads/logos/20230104/8154a6cb5662a60dc78fe4935a9a4c3d.png')]",
        url: "http://net.itlans.cn/shehui/578.html",   
    },
    {
        title: "Investor Observers",
        image: 'bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcG5z4GgndJ2hSEwGTtK9IhoYiuQIQeu1DWyQCsDtrEG9PUc0lZ7vf3udsb_XCU7Jgg&usqp=CAU")]',
        url: "https://www.investorsobserver.com/news/qm-pr/5797500451859980"
    },
    {
        title: "Menafn",
        image: "bg-[url('/company/mfn.png')]",
        url: "https://menafn.com/1106791170/Rxt-Token-Concludes-First-Session-Of-World-Tour-For-Mega-Project-Bitcoinland-Malaysia-In-Bangkok-Thailand"
    },
    {
        title: "Yahoo Finance HK",
        image: "bg-[url('/company/yahoo.png')]",
        url: "https://s.yimg.com/rz/p/yahoo_finance_en-US_h_p_financev2.png"
    },
    {
        title: "Yahoo Finance UK",
        image: "bg-[url('/company/yahoo.png')]",
        url: "https://uk.finance.yahoo.com/news/rxt-token-concludes-first-session-024900442.html"
    },
    {
        title: "Streetinsider",
        image: "bg-[url('https://www.interactivebrokers.com/images/2015/logos/company_logo_street_insider.png')]",
        url: "https://www.streetinsider.com/Newsfile/RXT+Token+Concludes+First+Session+of+World+Tour+for+Mega+Project+Bitcoinland+Malaysia+in+Bangkok%2C+Thailand/22002387.html"
    },
]
    return <div className={parentElementStyle}>
        <Image src="/icon.png" width={300} height={500} alt=""/>
        <h1 className="text-gold font-bold text-6xl"><ColorizedText from="from-black" to="to-gold" text={"RXT NEWS"} animate/></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
            {news.map((newd, i) =>
            <Link key={newd.url} href={newd.url} className="bg-white hover:bg-slate-300 rounded-xl flex flex-col py-5 justify-center items-center w-full h-full border">
                <div className={`w-full h-full min-h-[11rem] ${newd.image} bg-contain bg-no-repeat bg-center bg-`}/>
                <div className="flex flex-col">
                    <h2 className="text-black font-bold">{newd.title}</h2>
                </div>
            </Link>
            )}

        </div>
    </div>
}