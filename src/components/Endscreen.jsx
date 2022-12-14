import React from "react";

function Endscreen (props) {

    return (
        <div class='h-screen w-full'>
            <div class='grid grid-cols-1 p-10 place-items-center'>
                <div class='mb-6'>
                    <p>End of questions</p>
                </div>
                <div class='mb-6'>
                    <button class='h-12 px-4 bg-gradient-to-b from-blue-300 to-blue-400 rounded-md shadow-inner drop-shadow-xl hover:from-blue-400 hover:to-blue-500' onClick={props.toMainMenu}>Return to menu</button>
                </div>
            </div>
        </div>
    )
}

export default Endscreen