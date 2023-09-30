export default function ColorizedText(props: {text: String, from: string, to: string})
{
    return <h1 className={"font-extrabold text-transparent text-3xl lg:text-4xl mb-1.5 bg-clip-text bg-gradient-to-r " + props.from + " " + props.to}>{props.text}</h1>
}