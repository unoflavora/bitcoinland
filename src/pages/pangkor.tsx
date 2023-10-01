/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

/* eslint-disable jsx-a11y/alt-text */
export default function Pangkor()
{

    return <div className="flex flex-col px-5 lg:px-36 gap-10 ">
        <div className="flex flex-col gap-1 w-full justify-center items-center">
            <h1 className="text-gold text-3xl lg:text-7xl font-bold">Pangkor</h1>
            <h2 className="text-gold text-xl lg:text-3xl ">Bitcoin Exotic Island</h2>
        </div>


        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 lg:text-lg xl:text-xl text-black">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-4xl font-bold">Pangkalan Bitcoin Exotic Island</h3>
                    <div id='line' className="w-1/4 bg-gold h-1"/> 
                </div>

                <p>
            Pulau Mentagor stands as an island situated off the shores of Pulau Pangkor in the state of Perak. Positioned along the western coast, it takes the second spot as the largest among the outlying islands, trailing only behind Pangkor Laut. 
                <br/>
                <br/>
            Visitors are presented with a variety of upscale facilities and experiences within this picturesque environment. The envisioned design beautifully combines luxury and environmental responsibility, as the architectural components harmoniously integrate with the island's delicate ecosystem.            </p>

               <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold">Location</h3>
                    <p>Mentagor Island</p>
                </div>


                <ul className="flex flex-col gap-3">
                    <h3 className="font-bold">Acreage</h3>
                    <p>90ac</p>
                </ul>

                <div className="flex flex-col gap-2">
                <h3 className="font-bold">Typology</h3>
                    <p>Bitcoin Exotic Island, Mentagor, Pangkor</p>
                </div>
            </div>
            </div>
            <Image className="w-full h-full rounded-xl" src="/graphics/pangkor.png" width={900} height={500} alt="map of pangkor"/>


        


            
        </div>
    </div>
}