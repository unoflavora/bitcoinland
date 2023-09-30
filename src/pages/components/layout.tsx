import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children} : {children : ReactNode})
{
    return <div className="flex flex-col gap-20 min-h-screen justify-between bg-white">
    <Navbar/>
        <main className="grow">
            {children}
        </main>
    <Footer/>
    </div>

}