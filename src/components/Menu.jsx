import React, {useState} from "react";

function Menu (props) {
    
    const boxStyling = 'bg-gradient-to-b from-blue-300 to-blue-400 rounded-md shadow-inner drop-shadow-xl hover:from-blue-400 hover:to-blue-500 ring ring-blue-600/20 hover:ring-blue-600/40'
        
    function changePlayerName (e) {
        e.preventDefault()
        const newname = {
            player1: document.getElementById('player1').value,
            player2: document.getElementById('player2').value
        } 
        props.handleChange(newname)

        }
    

    return (
        <div  class='h-screen bg-pineapple-pattern'>
            <div class='grid grid-cols-1 justify-items-center pt-40'>
                <div class='h-40'>
                    <h1 class='text-6xl text-fuchsia-300 font-bold' id='menutext'>Only Connect</h1>
                </div>
                <div class='h-40'>
                    <button class={`mb-10 w-60 py-6 ${boxStyling}`} onClick={props.navigatePages}>
                        <p class='text-2xl'>Play</p>
                    </button>
                </div>
                <div class='grid grid-cols-2 grid-flow-col gap-4'>
                        <div class={`py-2 px-1 ${boxStyling}`}>
                        <input 
                            class='rounded-md bg-gray-100'
                            type='text'
                            placeholder="Player 1 name"
                            id='player1'
                        ></input>
                        </div>
                        <div class={`py-2 px-1 ${boxStyling}`}>
                        <input 
                            class='rounded-md bg-gray-100'
                            type='text'
                            placeholder="Player 2 name"
                            id='player2'
                        ></input>
                        </div>
                        <button class={`h-10 w-8 ${boxStyling}`} onClick={changePlayerName}>✓</button>
                </div>
            </div>
        </div>
    )
}

export default Menu