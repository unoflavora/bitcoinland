/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import MotionDiv from "../_components/motionDiv";

/* eslint-disable jsx-a11y/alt-text */
export default function Mentagor()
{

    return <MotionDiv>
    <div className="relative overflow-y-hidden flex flex-col justify-center items-center px-5 lg:px-36 xl:px-56 gap-10 lg:gap-24 bg-[#F5F5F5] py-20">
        <Image className="absolute -bottom-20  md:top-5 right-0 z-0 lg:w-96" src={"/graphics/mentagor.svg"} width={200} height={100} alt="coin decoration"/>
        <Image className="absolute max-md:top-0 w-36 md:-bottom-20 left-0 z-0 scale-x-[-1] lg:w-64" src={"/graphics/mentagor.svg"} width={200} height={100} alt="coin decoration"/>

        <h1 className='text-5xl lg:text-7xl 2xl:text-9xl text-gold text-center font-bold'>Mentagor Island</h1>


        <div className="w-full flex flex-col 2xl:flex-row gap-5 lg:gap-20 justify-center items-center  ">
        <Image className="w-full  rounded-xl" src="/mentagor/hero.png" width={800} height={500} alt="map of pengkalan hulu" loading="eager"/>

        <p className="lg:text-xl w-full xl:text-2xl text-black">
                Nestled within the Hulu Perak District of Malaysia, the captivating site of Pengkalan Hulu thrives at the confluence of cultures, bordered by Thailand and Kedah. At the heart of this oasis lies the Eco-Conserve Resort, a harmonious blend of sustainability and luxury. Immerse yourself in thrilling adventures alongside majestic elephants, then seek serenity at our tropical clubhouse.
        </p>

        </div>

    </div>
    </MotionDiv>
     
}