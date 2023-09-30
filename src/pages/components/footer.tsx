import Image from "next/image";
import Link from "next/link";

export default function Footer()
{
    return <div  className="w-full min-h-full py-8 lg:py-12 px-4 lg:px-36 gap-7 flex flex-col justify-center items-center bg-grey">
        
        <div className="flex flex-col justify-center items-center gap-7 lg:flex-row lg:justify-between w-full">
            <Image className="h-20 lg:h-24 w-fit aspect-square" src="/icon.png" width={500} height={500} alt="company-logo"/>
            

            <div className="flex flex-col justify-center items-center gap-7">
                <div className="flex lg:justify-between lg:w-full lg:px-10 gap-8">
                    {['discord', 'instagram', 'linkedin', 'twitter'].map((logo, i) => <Image key={`social logo ${logo}`} src={`/icons/${logo}.svg`} width={30} height={30} alt={`social logo ${logo}`}/>)}
                </div>

                <div className="flex gap-8 lg:text-lg font-semibold">
                    <Link href="/">Home</Link>
                    <Link href="/">Our Story</Link>
                    <Link href="/">Contact Us</Link>

                </div>
            </div>
        </div>
       
       

        <div className="w-full text-center border-t-2 text-xs">
            <p className="pt-2">© 2023 Bitcoinland. All rights reserved.</p>
        </div>


  
  </div>
}