/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

/* eslint-disable jsx-a11y/alt-text */
export default function Mentagor()
{

    return <div className="flex flex-col justify-center items-center px-5 lg:px-36 xl:px-56 gap-10 lg:gap-24 bg-[#F5F5F5] py-10">
        
        <h1 className="text-gold text-3xl lg:text-7xl font-bold text-center">Mentagor Island</h1>


        <div className="w-full flex flex-col 2xl:flex-row gap-5 lg:gap-20 justify-center items-center  ">
        <Image className="w-full  rounded-xl" src="/graphics/mentagor.png" width={800} height={500} alt="map of pengkalan hulu"/>

        <p className="lg:text-xl w-full xl:text-2xl text-black">
                Nestled within the Hulu Perak District of Malaysia, the captivating site of Pengkalan Hulu thrives at the confluence of cultures, bordered by Thailand and Kedah. At the heart of this oasis lies the Eco-Conserve Resort, a harmonious blend of sustainability and luxury. Immerse yourself in thrilling adventures alongside majestic elephants, then seek serenity at our tropical clubhouse.
        </p>

        </div>

    </div>
}