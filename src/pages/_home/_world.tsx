import { IframeHTMLAttributes, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../state/state";
import {motion} from 'framer-motion';
import Button from "../components/button";
import Div100vh from 'react-div-100vh'
import { read } from "fs";

export default function World()
{
    const [isPlaying, setIsPlaying] = useState(false);

    const {showNav, setShowNav} = useContext(AppContext);

    const [readyToPlay, setRoadyToPlay] = useState(false);

    const iframeRef = useRef<any>();

    const divRef = useRef<any>();


  
    const onClickPlay = () => {
      divRef.current?.scrollIntoView({behaviour: 'smooth'})
      iframeRef.current.contentWindow.postMessage("openScene", "*");
      setIsPlaying(true);
      setTimeout(() =>setShowNav(false), 200)
    }

    const onClickDownload = () => {
        divRef.current?.scrollIntoView({behaviour: 'smooth'})

        setShowNav(false)
    }

    useEffect(() => {
        window.addEventListener('message', (e) => {
            console.log("POST MESSAGE RECEIVE: " + e.data)

            if(e.data === "finishInitialLoading")
            {
                console.log("FINISH LOADING INIT")
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

    return <Div100vh ref={divRef} className={`relative grow p-5`}>
        
        <iframe ref={iframeRef} className={`w-full h-full rounded-2xl ${isPlaying ? 'pointer-events-auto' : 'pointer-events-none'} `}  src='https://dbisamples.s3.ap-southeast-1.amazonaws.com/bitcoinland/index.html'></iframe>
        
        {readyToPlay && !isPlaying &&
            <motion.div 
                animate={{opacity: readyToPlay && !isPlaying ? 1 : 0}}
                onClick={() => {  onClickPlay() }} className='animate-pulse absolute left-1/2 bottom-20 -translate-x-1/2 lg:bottom-50'>
            <Button>
                Enter the Bitcoinland
            </Button>
            </motion.div>
        }     
       
        
    </Div100vh>
}