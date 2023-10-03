import { parentElementStyle } from "@/lib/classnames";
import Image from "next/image";

export default function FoodSecurity()
{
    const foodSecurity = [
        {
            title: 'Business Planning',
            desc: 'Provide long-term, demand-driven, agriculture commodity supply chain to create security for nations. A complete horizontal and vertical integration in agriculture businesses.',
            imgUrl: '/story/boxes.svg'
        },
        {
            title: 'High Quality Product',
            desc: 'Our feed for cattle has all the nutritional needs to produce the best quality product with respect to energy, protein, minerals, and vitamins.',
            imgUrl: '/story/meats.svg'
        },
        {
            title: 'Internet of Things (IOT)',
            desc: 'Equipped with IoT-driven systems, our farms run on full efﬁciency with minimal human intervention. Connecting real-time data with our platform',
            imgUrl: '/story/phone.svg'
        },
        {
            title: 'Insurance',
            desc: 'Embedded with digital insurance and smart protection, farm investment is well guarded. Capital investment is guaranteed in case of any death, injury, natural disaster, or diseases',
            imgUrl: '/story/insurance.svg'
        },
    ]
    
    return (
        <div className={"bg-gray-200 " + parentElementStyle}>
            <h1 className="font-bold text-black text-2xl lg:text-4xl text-center">Taking Holistic Concepts to Implement Sustainable, Socially Responsible, Operations in Food Security</h1>
            <div className="flex flex-col md:grid-cols-2 md:grid lg:grid-cols-4 w-full justify-center items-center gap-4">
                {foodSecurity.map((foo, i) =>  
                    <div key={foo.title} className="flex flex-col w-full justify-center items-center gap-4">
                        <Image src={foo.imgUrl} width={200} height={200} alt={foo.title}/>
                        <h2 className="font-bold text-black text-2xl text-center">{foo.title}</h2>
                        <p className="text-text-grey text-center">
                            {foo.desc}
                        </p>

                    </div>
                )}
            </div>
        </div>
    )
}