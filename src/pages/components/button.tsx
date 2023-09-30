import { ReactNode } from "react";

export default function Button (props : {children : ReactNode})
{
    return <div className="w-fit px-6 py-2 text-xl rounded-2xl md:text-4xl md:px-10 md:rounded-3xl md:py-2 bg-white  text-blue-500 text-center">
        {props.children}
    </div>
}