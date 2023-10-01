/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

/* eslint-disable jsx-a11y/alt-text */
export default function Mentagor()
{

    return <div className="flex flex-col px-5 lg:px-36 xl:px-56 gap-10 bg-[#F5F5F5] py-10">
        
        <h1 className="text-gold text-3xl lg:text-7xl font-bold text-center">Mentagor Island</h1>


        <Image className="w-full rounded-xl" src="/graphics/mentagor.png" width={900} height={500} alt="map of pengkalan hulu"/>

        <p className="lg:text-lg xl:text-xl text-black">
                Nestled within the Hulu Perak District of Malaysia, the captivating site of Pengkalan Hulu thrives at the confluence of cultures, bordered by Thailand and Kedah. At the heart of this oasis lies the Eco-Conserve Resort, a harmonious blend of sustainability and luxury. Immerse yourself in thrilling adventures alongside majestic elephants, then seek serenity at our tropical clubhouse.
            </p>
    </div>
}