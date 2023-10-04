import Image from "next/image";

export default function Location()
{
    return (
        <div className={`w-full h-full flex flex-col  justify-center items-center gap-10`} >
        <div className="flex flex-col md:flex-row items-center justify-center  gap-5 w-full ">
            <article className=" flex flex-col max-md:items-center justify-center  gap-5 ">
                <h1 className="text-5xl font-bold text-black">Site Location</h1>

                <div className="h-1 w-1/12 bg-gold"/>
                <Image className="md:hidden" src="/penang/site-location.png" width={480} height={376} alt="penang site location"/>
                <h2 className="text-black font-semibold ">Location:</h2>
                <ul className="flex text-[#64686b] flex-col">
                    <li>1. Bayan Lepas, Penang</li>
                    <li>2. Georgetown, Penang</li>
                </ul>
                
                <h2 className="text-black font-semibold">Acreage:</h2>
                <ul className="flex text-[#64686b] flex-col">
                    <li>1. 280 ac</li>
                    <li>2. 94 ac</li>
                </ul>

                <h2 className="text-black font-semibold">Typology:</h2>
                <ul className="flex text-[#64686b] flex-col">
                    <li>1. Bitcoin Resort City Bayan Lepas</li>
                    <li>2. Bitcoin Tower Georgetown</li>
                </ul>

            </article>

            <Image  className="md:w-1/2 md:h-fit lg:w-full max-md:hidden rounded-xl" src="/penang/site-location.png" width={480} height={376}  alt="penang site location"/>
        </div>
       

        <div className="flex flex-col md:flex-row gap-5">
            {[
                {
                    title: 'Thriving Economy',
                    desc: 'Penang island has hills in the centre. The mainland has a lot of land reserved for rice planting, which is important for food security. The state government has little land, and land acquisitions are costly and unpopular are one of the reasons for land reclamation. ',
                    url: '/penang/icon1.png'
                },
                {
                    title: 'The First Land',
                    desc: 'Penang Island was originally known by native seafarers as Pulau Ka-Satu, meaning The First Island, because it was the largest island encountered on the trading sea-route between Lingga and Kedah. Boating and ﬁsherman’s community in Penang is embedded since the early days and still continues to provide a sense of uniqueness to distinguish Penang from other state in Malaysia.',
                    url: '/penang/icon3.png'
                },
                {
                    title: 'Eclectic Culture & Heritage',
                    desc: 'Three urban typologies have been identiﬁed in the urban DNA of Georgetown and adapted to develop our building typologies for the the masterplan: Internal yard block, Typical block, Floating Village. ',
                    url: '/penang/icon2.png'
                },
            ].map((item, _) => <Item url={item.url} key={`penang ${item.title}`} title={item.title} desc={item.desc}/>)}
        </div>
    </div>
    )
}

const Item = (props: {url: string, title: string, desc:string}) =>
{
    return  (
        <div className="w-full h-full flex flex-col gap-3 text-black">
            <Image className="rounded-xl" src={props.url} width={500} height={500} alt="url"/>
            <h3 className="font-bold">{props.title}</h3>
            <p className="text-text-grey">{props.desc}</p>
        </div>
    )
}