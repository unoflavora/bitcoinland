import Image from "next/image";

export default function Positioning()
{
    return <div className="flex flex-col gap-10">
        <div className="flex max-md:flex-col flex-row md:gap-6 w-full justify-center items-center">
            <h1 className="text-5xl leading-tight font-bold max-md:text-center   text-black">Strategic Positioning </h1>
            <div  id="Line" className="border-solid border-[#ca9c28] bg-white mt-5 w-full h-1 border-t-4 border-b-0 border-x-0"
            />

        </div>
        <div className="flex flex-col gap-5">
            {[
                    {
                        bg: "bg-pink-400",
                        title: "Community",
                        desc: "Directly linked to the existing Bayan Lepas Industrial zone and airport. In need of green landscape that act as buffer and at the same time specially design that suit with the industry of future."
                    },
                    {
                        bg: "bg-sky-300",
                        title: "Culture",
                        desc: "Tie together the other two zones through the cultural hub. The vibrancy and economic driver of the ﬁnancial and cultural arts centre will reinforce the entire bay into a vibrant active programme waterfront."
                    },
                    {
                        bg: "bg-[#CA9C28]",
                        title: "Youth",
                        desc: 'To attract youngster and tourist from Georgetown to the southern region. A grand statement impression'
                    }
                ].map((item, i) => <div key={item.title} className={`relative w-full flex flex-col gap-5 p-3 rounded-xl bg-opacity-20 ${item.bg}`}>
                        <h3 className="text-black font-semibold">{item.title}</h3>
                        <p className="text-text-grey">{item.desc}</p>
                    </div>)
                }
        </div>      
    </div>
  
}