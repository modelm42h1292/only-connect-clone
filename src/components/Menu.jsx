import React, {useState} from "react";

function Menu (props) {
    
    const boxStyling = 'bg-gradient-to-b from-blue-300 to-blue-400 rounded-md shadow-inner drop-shadow-xl hover:from-blue-400 hover:to-blue-500 ring ring-blue-600/20 hover:ring-blue-600/40'

    function changePlayerName (e) {
        e.preventDefault()
        const {name, value} = e.target
        props.handleChange((oldValue) => {
            return {...oldValue, [name]: value}
        })

        }
    
    function changeLang(e) {
        e.preventDefault()
        props.setLang(e.target.value)
    }

    return (
        <div  class='h-screen bg-pineapple-pattern'>
            <div class='grid grid-cols-1 justify-items-center pt-32'>
                <div class='h-40'>
                    <h1 class='text-6xl text-fuchsia-300 font-bold' id='menutext'>Only Connect</h1>
                </div>
                <div class='h-36'>
                    <button class={`mb-10 w-60 py-6 ${boxStyling}`} onClick={props.navigatePages}>
                        <p class='text-2xl'>Play</p>
                    </button>
                </div>
                <div class='h-28'>
                    <select value={props.lang} onChange={changeLang} class='rounded-sm px-2 h-8 w-16'>
                        <option value='est' class='bg-blue-100'>Est</option>
                        <option value='eng' class='bg-blue-100'>Eng</option>
                    </select>
                </div>
                <div class='grid grid-cols-2 grid-flow-col gap-4'>
                        <div class={`py-2 px-1 ${boxStyling}`}>
                        <input 
                            class='rounded-md bg-gray-100'
                            type='text'
                            placeholder="Player 1 name"
                            value={props.playerNames.player1}
                            name='player1'
                            onChange={changePlayerName}
                        ></input>
                        </div>
                        <div class={`py-2 px-1 ${boxStyling}`}>
                        <input 
                            class='rounded-md bg-gray-100'
                            type='text'
                            placeholder="Player 2 name"
                            value={props.playerNames.player2}
                            name='player2'
                            onChange={changePlayerName}
                        ></input>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Menu