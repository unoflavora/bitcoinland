import MotionDiv from "../components/motionDiv";
import About from "./abouts";
import FoodSecurity from "./foodSecurity";
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

        <About/>

        <MotionDiv>
            <Token/>
        </MotionDiv>



        </div>

    )
}