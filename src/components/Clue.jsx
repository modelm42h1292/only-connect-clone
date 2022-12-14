import React from "react";
import QuestionMeter from "./QuestionMeter";

function Clue (props) {
    console.log(props)
    return (
        <div class='col-span-1'>
        <div class='grid grid-cols-1 place-items-center p-2'>
            <div class='h-4 w-full mb-4'>
                {props.displayMeter == props.cluesVisible && <QuestionMeter meterValue={props.meterValue} points={props.points}/>}
            </div>
            <div class=' bg-gradient-to-b from-blue-300 to-blue-400 h-32 w-60 rounded-md shadow-inner drop-shadow-xl ring ring-blue-600/20'>
                <p class='text-center my-10 text-3xl'>{props.cluesVisible > 0 && props.clueToDisplay}</p>
            </div>
        </div>
    </div>
    )
}

export default Clue