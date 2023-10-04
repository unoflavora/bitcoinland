import { animate } from "framer-motion";

export default function ColorizedText(props: {text: String, from: string, to: string, animate? : boolean})
{
    return <text className={"font-extrabold text-transparent mb-1.5 bg-clip-text bg-gradient-to-r " + `${props.animate ? 'animate-linear-bg bg-[size:200%]' : ""}` + " " + props.from + " " + props.to}>{props.text}</text>
}