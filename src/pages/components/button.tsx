import { ReactNode } from "react";

export default function Button (props : {children : ReactNode})
{
    return <div className="w-fit px-2 bg-white rounded-xl text-blue-500 text-center">
        {props.children}
    </div>
}