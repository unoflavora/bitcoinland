import MotionDiv from "../_components/motionDiv";
import FarmingOnline from "./farmingOnline";
import FoodSecurity from "./foodSecurity";
import NFTCollection from "./nftCollection";
import Rimaunangis from "./rimaunangis";
import Story from "./story";
import Token from "./tokenInformation";

export default function Index()
{
    return (
        <div className="w-full flex flex-col gap-20 justify-center items-center max-sm:pt-20 md:pt-32 lg:pt-44 ">
        <MotionDiv>
            <Story/>
        </MotionDiv>

        <FoodSecurity/>
        <FarmingOnline/>
        <NFTCollection/>
        <Rimaunangis/>

        <MotionDiv>
            <Token/>
        </MotionDiv>



        </div>

    )
}