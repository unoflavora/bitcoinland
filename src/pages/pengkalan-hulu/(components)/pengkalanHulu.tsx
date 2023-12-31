/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import MotionDiv from "../../_components/motionDiv";

/* eslint-disable jsx-a11y/alt-text */
export default function PengkalanHulu()
{

    return <div className="relative w-full bg-[#F5F5F5]">
        <div className="absolute flex z-0 left-0 max-md:opacity-30 top-5">
            <Image className="2xl:w-72  scale-x-[-1]" src={"/graphics/elephant.svg"} width={200} height={100} alt="coin decoration" />
        </div>
        <Image className="absolute bottom-0 right-0 max-sm:hidden" src={"/graphics/elephant.svg"} width={200} height={100} alt="coin decoration"/>


        <div className="w-full flex flex-col px-5 md:px-16 lg:px-36  gap-10   py-20 xl:py-20">
        <div className="flex flex-col gap-1 lg:gap-10 w-full justify-center items-center">
            <h1 className='text-5xl lg:text-7xl 2xl:text-9xl text-gold text-center font-bold'>Pengkalan Hulu</h1>
            <h2 className="text-gold text-xl lg:text-3xl ">Bitcoin Elephant Sanctuary</h2>
        </div>

        <MotionDiv>
            <Image className="w-full rounded-2xl" src="/pengkalan-hulu/pengkalan-hulu.webp" width={900} height={500} alt="map of pengkalan hulu" loading="eager"/>
        </MotionDiv>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 lg:text-lg xl:text-xl text-black">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-4xl font-bold">Pangkalan Hulu Bitcoin Elephant Sanctuary</h3>
                    <div id='line' className="w-1/4 bg-gold h-1"/> 
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold">Location</h3>
                    <p>Pengkalan Hulu, Perak</p>
                </div>


                <ul className="flex flex-col gap-3">
                    <h3 className="font-bold">Acreage</h3>
                    <ul>110 ac</ul>
                    <ul>105 ac</ul>
                    <ul>12.7 ac</ul>
                </ul>

                <div className="flex flex-col gap-2">
                <h3 className="font-bold">Typology</h3>
                    <p>Pengkalan Hulu, Perak</p>
                </div>
            </div>

            <p>
                Nestled within the Hulu Perak District of Malaysia, the captivating site of Pengkalan Hulu thrives at the confluence of cultures, bordered by Thailand and Kedah. At the heart of this oasis lies the Eco-Conserve Resort, a harmonious blend of sustainability and luxury. Immerse yourself in thrilling adventures alongside majestic elephants, then seek serenity at our tropical clubhouse.
            </p>

            <p>
                Explore a world of leisure with diverse retail outlets, comfortable hotel accommodations, and a lush fruit orchard garden. This symphony of cultural fusion, environmental stewardship, and modern amenities creates a haven for discerning travellers, offering an enriching tapestry of experiences in this enchanting region.
            </p>
        </div>
        </div>
        
    </div>
}