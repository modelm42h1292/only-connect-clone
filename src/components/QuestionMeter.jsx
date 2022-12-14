import React, {useEffect, useState} from "react";

function QuestionMeter (props) {
    

    
    
    return (
        <div class='w-full bg-blue-800 rounded-md h-6 relative shadow-inner ring ring-blue-600/20'>
           <div class='h-6 bg-blue-500 rounded-md shadow-inner' style={{width: `${props.meterValue*100}%`}}>
            <p class='absolute ml-6 text-gray-100 font-bold' id='metertext'>{props.points > 1 ? `${props.points} points` : `${props.points} point`}</p>
           </div>
        </div>
    )
}

export default QuestionMeter