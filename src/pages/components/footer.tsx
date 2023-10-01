import Image from "next/image";
import Link from "next/link";

export default function Footer()
{
    return <div  className="w-full min-h-full py-8  px-4 lg:px-36 gap-7 lg:gap-14 lg:py-10 flex flex-col justify-center lg:justify-between items-center bg-grey">
        
        <div className="flex flex-col justify-center items-center gap-7 lg:flex-row lg:justify-between w-full">
            <Image className="h-20 lg:h-24 w-fit aspect-square" src="/icon.png" width={500} height={500} alt="company-logo"/>
            

            <div className="flex flex-col justify-center items-center lg:justify-end lg:items-end gap-7">
                <div className="flex  lg:w-full lg:justify-end  gap-8">
                    {[
                        {title: 'Instagram', url : 'https://www.instagram.com/rxt_token'}, 
                        {title: 'Twitter', url : 'https://twitter.com/RimaunangisRXT'}, 
                        {title: 'Facebook', url : 'https://www.facebook.com/people/Rimaunangis-Capital-LTD/100084889096948/'}, 
                        {title: 'Youtube', url : 'https://www.youtube.com/@rimaunangisdigitalllc3198'}, 
                        {title: 'Tiktok', url : 'https://www.tiktok.com/@rxt_token?_t=8eiiaawuxva&_r=1'}].map((logo, i) => 
                            <Link key={`social logo ${logo}`} href={logo.url}>
                                <Image src={`/icons/${logo.title}.svg`} width={40} height={30} alt={`social logo ${logo}`}/>
                            </Link>
                        )}
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