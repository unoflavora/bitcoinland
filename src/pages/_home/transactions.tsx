import { parentElementStyle } from "@/lib/classnames";
import Image from "next/image";

export default function BitcoinTransactions()
{
    return (
        <div className={parentElementStyle}>
            <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 gap-4 lg:gap-10">
                <div className="w-full flex flex-col gap-4 lg:gap-10">
                    <div className="w-full flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gold">Bitcoin Transactions</h1>
                        <h2 className="font-bold text-black">The public decentralised ledger in which the Bitcoin operates on is known as a blockchain.</h2>

                    </div>
                    <div className="h-full w-auto min-h-[20rem]  rounded-xl bg-[url('/graphics/blockchain.png')] bg-[30%_20%] bg-cover"></div>
                </div>
                <div className="flex flex-col gap-4">
                    {
                    [{
                        title: "What is Blockchain?",
                        desc: {__html: "This refers to a connected set of data that is made up of blocks that contain details about each transaction, including the date and time, total amount, buyers and sellers, and a special code for each exchange. These entries are connected in chronological sequence, producing a digital block chain."}
                    },
                    {
                        title: "How Secure is Bitcoin?",
                        desc: {__html: "This refers to a connected set of data that is made up of blocks that contain details about each transaction, including the date and time, total amount, buyers and sellers, and a special code for each exchange. These entries are connected in chronological sequence, producing a digital block chain. <br/><br/>These codes are made up of lengthy, random numbers, which ensures their security against unauthorised production. The likelihood of fraudulent bitcoin transactions is reduced by the high amount of statistical unpredictability in blockchain veriﬁcation codes, which are required for every transaction."}
                    }].map((item, _) => 
                        <div className="flex flex-col gap-4" key={item.title}>
                            <h3 className="font-bold text-black">{item.title}</h3>
                            <p className="text-text-grey" dangerouslySetInnerHTML={item.desc}></p>
                        </div>
                        )
                    }
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-gold">Revolutionary Changes</h1>
                <div className="flex flex-col gap-4">
                    {
                    [{
                        title: "Why is Bitcoin Becoming More Popular?",
                        desc: 
                        {
                            __html:'<span class="text-gold font-bold leading-normal"> With the use of a blockchain technology to conduct payments with Bitcoin, its security is its most appealing factor to many people.</span> <span class="text-neutral-500 font-normal leading-normal"> Additionally, Bitcoin enables efﬁciency in transactions now. It is able to help organize processes and operations in a quick manner which gets passed on to consumers. The traditional process requires an intermediary to check speciﬁc details, charge a fee, and then send the converted money to the recipient. However, Bitcoin has no geographical boundaries. </span> <span class="text-gold font-bold leading-normal">The value of Bitcoin has also attracted many people. Its limited quantity has raised its value immensely.</span>'
                        }
                        
                    },
                    {
                        title: "How Is Society Reacting to Biticoin:?",
                        desc: 
                        {
                            __html:                         `
                            <span class="text-neutral-500 font-normal leading-normal">
                            There are varying opinions of Bitcoin from central banks around the world. Some banks are very cautious of Bitcoin since it has a high frequency its price movements moving up or down. However, other banks like Europe’s Central Bank, the Bank of Japan and the Bank of England have been evaluating the use of a central bank digital currency. </span>
                            <span class="text-gold font-bold leading-normal">Bitcoin's importance for civilization lies in its potential to democratize ﬁnance, foster ﬁnancial inclusion, promote transparency, mitigate inﬂation risks, drive innovation, and provide a secure and decentralized digital store of value.</span>
                            `    
                        }
                    }].map((item, _) => 
                        <div className="flex flex-col gap-4" key={item.title}>
                            <h3 className="font-bold text-black">{item.title}</h3>
                            <p className="text-text-grey" dangerouslySetInnerHTML={item.desc}/>
                        </div>
                        )
                    }
                </div>
            </div>
           
        </div>
    )
}