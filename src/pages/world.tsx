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
           if(e.data === "finishLoad")
           {
                setFinishLoad(true)
           }

           if(e.data === "closeScene")
           {
            console.log(e.data)
            setIsPlaying(false)
            setShowNav(true)
           }

        })
    }, [])
    return <>
    
        <iframe ref={iframeRef} className={`w-full min-h-screen grow transition-all ${isPlaying ? "p-0 pt-0 md:rounded-b-0 pointer-events-auto z-[10000]" : "pb-10 pointer-events-none"} `}  
            src='https://static-3d-1aa7jr0v5-imamsyahid.vercel.app'></iframe>

        <div className="absolute w-screen min-h-screen ">
            {finishLoad && !isPlaying && <button 
                
            onClick={onClickPlay} className='absolute left-1/2 bottom-20 -translate-x-1/2 lg:bottom-50'>
            <Button>
                Play
            </Button>
            </button>}         

        </div>
       
        
    </>
}