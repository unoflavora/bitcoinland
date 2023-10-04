import Image from "next/image";

export default function Nodes()
{
    const nodes = [
        {
            title: 'ZONE A: YOUTH',
            desc: 'Zone A is dedicated for the youth of the city. Equipped with low scale compact but very high scale bustling urban towns dedicated for institutions, commercials such as ofﬁces and strip retail. The main anchor of this development is at the tip of the island, the lifestyle boutique commercial dedicated for the young and vibrant community of Penang.',
        },
        {
            title: 'ZONE B: CULTURE',
            desc: 'Boasting an existing ﬁsherman’s home, zone B houses the tropical and attractive Fisherman’s wharf. The ﬁsherman wharf will be rejuvenated into a thriving destination that preserves its local heritage, supports the livelihoods of the ﬁsherman and offers an enhanced quality of life for residents while attracting visitors to the area, a vibrant and dynamic stretch of waterfront to showcase the rich heritage  and traditions of the community that serve as a catalyst for economic growth.',
        },
        {
            title: 'Zone C: COMMUNITY',
            desc: 'More secluded and isolated island, zone C focuses on communal living, residences in the park and fronting the sea with elements of commercial such as ofﬁces and neighborhood retail such as supermarkets and support facilities around the corner. The jewel of the zone is located at the south most tip, where the grand bazaar with plaza and ample public space embellish the district, creating a shopping haven for communities alike.',
        },
    ]

    const Node = (props: {title :string, desc: string}) => {
        return <div className="flex flex-col gap-3">
            <h3 className="font-bold text-black text-2xl">{props.title}</h3>
            <p className="text-text-grey">{props.desc}</p>
        </div>
    }
    

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl font-bold text-black">Creating Nodes</h1>
                <div className="h-1 w-1/4 bg-gold"/>

            </div>
            <p className="text-text-grey">The southeastern coast of Penang is a fast lane for passerby passing from Batu Maung to Sungai Dua into Georgetown. The most signiﬁcant natural element along this trail of highway is Pulau Jerejak. Framing Pulau Jerejak, these zones creates engine of growth that fuels the hole masterplan.</p>

            <div className="flex justify-between gap-10">
             <Image className="rounded-xl" src="/penang/nodes.webp" width={500} height={712} alt="Picture of nodes"/>

             <div className="max-lg:hidden flex flex-col gap-5">
                {nodes.map((n, _) => <Node title={n.title} desc={n.desc} key={n.title}/>)}
             </div>

            </div>

            <div className="lg:hidden flex flex-col gap-5">
                {nodes.map((n, _) => <Node title={n.title} desc={n.desc} key={n.title}/>)}
             </div>

        </div>
    )
}