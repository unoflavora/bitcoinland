import { useContext, useEffect, useState } from "react";
import { AppContext } from "./state/state";
import {motion} from 'framer-motion';
import Button from "./components/button";

export default function World()
{
    const [isPlaying, setIsPlaying] = useState(false);

    const {showNav, setShowNav} = useContext(AppContext);

    const [finishLoad, setFinishLoad] = useState(false);

  
    useEffect(() => {
      setShowNav(true)
    }, [])
  
    const onClickPlay = () => {
      console.log(isPlaying)
      window.scrollTo({top : 0, behavior: "smooth"});
      setIsPlaying(!isPlaying);
      setShowNav(isPlaying)
    }

    useEffect(() => {
        window.addEventListener('message', (e) => {
           if(e.data === "finishLoad")
           {
                setFinishLoad(true)
           }
        })
    }, [])
    return <>
    
        <iframe allowTransparency={true}  className={`w-full min-h-screen grow transition-all  ${isPlaying ? "p-0 pt-0 md:rounded-b-0 pointer-events-none" : "pb-10 md:rounded-b-[100px] pointer-events-none"} `}  src='http://localhost:5500/'></iframe>


        <div className="absolute w-screen min-h-screen ">
            {finishLoad && !isPlaying && <button 
                
                onClick={onClickPlay} className='absolute left-1/2 bottom-20 -translate-x-1/2 lg:bottom-50'>
                <Button>
                    Play
                </Button>
                </button>}

            <motion.button 
            animate={{scale: isPlaying ? 1 : 0}}
            onClick={onClickPlay}
            className={`w-fit p-5 absolute max-sm:top-10 md:top-20 lg:top-40 right-[5%] -translate-x-1/4 z-[10000000] pointer-events-auto` }
            >
                <div className="md:text-3xl text-black font-semibold bg-slate-200 rounded-full px-4 py-2">
                    X
                </div>
            </motion.button>

            

        </div>
       
        
    </>
}