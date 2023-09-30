import { IframeHTMLAttributes, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./state/state";
import {motion} from 'framer-motion';
import Button from "./components/button";

export default function World()
{
    const [isPlaying, setIsPlaying] = useState(false);

    const {showNav, setShowNav} = useContext(AppContext);

    const [finishLoad, setFinishLoad] = useState(false);

    const iframeRef = useRef<any>();

  
    useEffect(() => {
      setShowNav(true)
    }, [])
  
    const onClickPlay = () => {
      window.scrollTo({top : 0, behavior: "smooth"});
      setIsPlaying(true);
      setShowNav(false)
      iframeRef.current.contentWindow.postMessage("openScene", "*");
    }

    useEffect(() => {
        window.addEventListener('message', (e) => {
            console.log(e.data)
           if(e.data === "startScene" )
           {
                setFinishLoad(true)
           }

           if(e.data === "closeScene" || e.data === "ExitScene")
           {
            console.log(e.data)
            setIsPlaying(false)
            setShowNav(true)
           }

        })
    }, [])
    return <>
    
        <iframe ref={iframeRef} className={`w-full min-h-screen grow transition-all ${isPlaying ? "p-0 pt-0 md:rounded-b-0 pointer-events-auto z-[10000]" : "pt-12 pointer-events-none"} `}  
            src='https://breezeinteractive.digital/test18/'></iframe>

        <div className="absolute w-screen min-h-screen ">
            {finishLoad && !isPlaying && <button 
                
            onClick={onClickPlay} className='animate-pulse absolute left-1/2 bottom-20 -translate-x-1/2 lg:bottom-50'>
            <Button>
                Enter the Bitoinland
            </Button>
            </button>}         

        </div>
       
        
    </>
}