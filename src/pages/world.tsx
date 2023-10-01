import { IframeHTMLAttributes, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./state/state";
import {motion} from 'framer-motion';
import Button from "./components/button";
import Div100vh from 'react-div-100vh'

export default function World()
{
    const [isPlaying, setIsPlaying] = useState(false);

    const {showNav, setShowNav} = useContext(AppContext);

    const [readyToPlay, setRoadyToPlay] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

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
            console.log("POST MESSAGE RECEIVE: " + e.data)

            if(e.data === "finishInitialLoading")
            {
                setIsLoading(false);
            }
            if(e.data === "startScene" )
            {
                setRoadyToPlay(true)
            }

            if(e.data === "closeScene" || e.data === "exitScene")
            {
                console.log(e.data)
                setIsPlaying(false)
                setShowNav(true)
            }

        }, )
    }, [])
    return <>
    
        <Div100vh className={`grow transition-transform ${isPlaying || !readyToPlay ? "translate-y-0 md:rounded-b-0 z-[10000] pointer-events-auto" : "translate-y-12 xl:translate-y-24 pointer-events-none"}`}>
            <iframe ref={iframeRef} className={`w-full h-full`}  src='https://dbisamples.s3.ap-southeast-1.amazonaws.com/bitcoinland_2/index.html'></iframe>
        </Div100vh>

        { readyToPlay &&
            <motion.div 
                animate={{opacity: readyToPlay && !isPlaying ? 1 : 0}}
                transition={{delay: readyToPlay ? 1.25 : 0}}
                onClick={onClickPlay} className='animate-pulse absolute left-1/2 bottom-20 -translate-x-1/2 lg:bottom-50'>
            <Button>
                Enter the Bitcoinland
            </Button>
            </motion.div>
        }     
       
        
    </>
}