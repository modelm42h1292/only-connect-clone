import React from "react";

function Endscreen (props) {

    const boxStyling = 'bg-gradient-to-b from-blue-300 to-blue-400 rounded-md shadow-inner drop-shadow-xl hover:from-blue-400 hover:to-blue-500 ring ring-blue-600/20 hover:ring-blue-600/40'

    function handleClick () {
        props.setPlayerScore({
            player1: 0,
            player2: 0
          })
        props.toMainMenu()
    }

    return (
        <div class='h-screen w-full'>
            <div class='grid grid-cols-1 p-10 place-items-center'>
                <div class='mb-6'>
                    <p>End of questions</p>
                    <p>Scores:</p>
                    <p>{props.playerNames.player1} got {props.playerScore.player1} points</p>
                    <p>{props.playerNames.player2} got {props.playerScore.player2} points</p>
                </div>
                <div class='mb-6'>
                    <button class={`h-12 ${boxStyling}`}  onClick={handleClick}>Return to menu</button>
                </div>
            </div>
        </div>
    )
}

export default Endscreen