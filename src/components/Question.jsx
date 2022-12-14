import React, {useState, useEffect, useRef} from "react";
import questionListEng from "./QuestionListEng";
import questionListEst from './QuestionListEst'
import Clue from "./Clue";

function Question (props) {

    const questionList = props.lang === 'eng' ? questionListEng : questionListEst
    const [meterValue, setMeterValue] = useState(1)
    const [clues, setClues] = useState([])
    const [questionToDisplay, setQuestionToDisplay] = useState(questionList[0])
    const [pause, setPause] = useState(false)
    const timer = useRef(null)
    

    const boxStyling = 'bg-gradient-to-b from-blue-300 to-blue-400 rounded-md shadow-inner drop-shadow-xl hover:from-blue-400 hover:to-blue-500 ring ring-blue-600/20 hover:ring-blue-600/40'

    function nextClue () {
        setMeterValue(1)
        // this also displays the answer
        if (clues.length <= 4) {
        setClues(clues => [...clues, (clues.length + 1)])
        } else {
            newQuestion()
        }
    }

    function pauseGame () {
        setPause(oldValue => !oldValue)
    }
    
    function newQuestion() {
        if (questionToDisplay != questionList[questionList.length -1]) {
            setQuestionToDisplay(oldValue => {
                const newquestion = questionList.findIndex(x => x === oldValue) + 1
                return questionList[newquestion]
            })
            setClues([])
            setPause(false)
        } else {
            endGame()
        }
    }
    
    
    
    function endGame() {
        props.navigatePages()
    }
    
    function addScore (event) {
        const name = event.currentTarget.id === 'addToPlayer1' ? 'player1' : 'player2'
        const text = Number(event.target.innerText)
        props.setPlayerScore(oldValue => {
            return {
                ...oldValue,
                [name]: text + oldValue[name]
            }
        })
    }
    
    useEffect(() => {
        if (meterValue > 0 && pause == false) {
            timer.current = setInterval( () => {
                (setMeterValue(oldValue => (oldValue - 0.01).toFixed(2))) 
            }, 500)
            return () => {
                clearInterval(timer.current)
            }
        }
    }, [clues])
    


    return (
        <div class='bg-quatrefoil h-screen'>
            <div class='grid grid-cols-1 place-items-center px-10 py-4'>
            <div class={`mb-8 w-auto px-4 ${boxStyling}`}>
                <p class='text-center my-4 text-4xl '>{questionToDisplay.question}</p>
            </div>
            <div class='grid grid-cols-4 gap-4 place-items-center mb-14 h-40'>
                {clues.length > 0 && <Clue cluesVisible={clues.length} clueToDisplay={questionToDisplay.clue1} meterValue={meterValue} points={5} displayMeter={1} meterInterval={timer.current} pause={pause}/>}
                {clues.length > 1 && <Clue cluesVisible={clues.length} clueToDisplay={questionToDisplay.clue2} meterValue={meterValue} points={3} displayMeter={2} meterInterval={timer.current} pause={pause}/>}
                {clues.length > 2 && <Clue cluesVisible={clues.length} clueToDisplay={questionToDisplay.clue3} meterValue={meterValue} points={2} displayMeter={3} meterInterval={timer.current} pause={pause}/>}
                {clues.length > 3 && <Clue cluesVisible={clues.length} clueToDisplay={questionToDisplay.clue4} meterValue={meterValue} points={1} displayMeter={4} meterInterval={timer.current} pause={pause}/>}

            </div>
            
            <div class={`mb-4 h-16 w-full px-4 ${boxStyling}`} style={clues.length > 4 ? {opacity: 1} : {opacity: 0, transform: `rotateX(90deg)`}}>
                <p class='text-center my-4 text-2xl'>{clues.length > 4 && questionToDisplay.answer}</p>
            </div>
            <div class='mb-4'>
                <button class={`h-12 px-4 ${boxStyling}`} onClick={nextClue}> {clues.length < 4 ? <p>Next Clue</p> : clues.length < 5 ? <p>Show Answer</p> : <p>Next Question</p>}</button>
            </div>
            <div class='mb-4 grid grid-cols-3 place-items-center w-full'>
                <div class='w-full'>
                    <div class='relative'>
                        <button class={`h-12 w-40 left-0 absolute ${boxStyling}`}>{props.playerNames.player1}</button>
                        <p class='mt-3 left-32 absolute'>{props.playerScore.player1}</p>
                        <button class={`h-6 w-2 -top-6 left-0 px-4 absolute ${boxStyling}`} id='addToPlayer1' onClick={addScore}><p class={'-ml-2'}>1</p></button>
                        <button class={`h-6 w-2 -top-6 left-8 px-4 absolute ${boxStyling}`} id='addToPlayer1' onClick={addScore}><p class={'-ml-2'}>2</p></button>
                        <button class={`h-6 w-2 -top-6 left-16 px-4 absolute ${boxStyling}`} id='addToPlayer1' onClick={addScore}><p class={'-ml-2'}>3</p></button>
                        <button class={`h-6 w-2 -top-6 left-24 px-4 absolute ${boxStyling}`} id='addToPlayer1' onClick={addScore}><p class={'-ml-2'}>5</p></button>
                    </div>
                </div>
                <button class={`h-12 px-4 ${boxStyling}`} onClick={props.toMainMenu}>Return to menu</button>
                <div class='w-full'>
                    <div class='relative'>
                        <button class={`h-12 w-40 right-0 absolute ${boxStyling}`}>{props.playerNames.player2}</button>
                        <p class='mt-3 right-32 absolute'>{props.playerScore.player2}</p>
                        <button class={`h-6 w-2 -top-6 right-0 px-4 absolute ${boxStyling}`} id='addToPlayer2' onClick={addScore}><p class={'-ml-2'}>1</p></button>
                        <button class={`h-6 w-2 -top-6 right-8 px-4 absolute ${boxStyling}`} id='addToPlayer2' onClick={addScore}><p class={'-ml-2'}>2</p></button>
                        <button class={`h-6 w-2 -top-6 right-16 px-4 absolute ${boxStyling}`} id='addToPlayer2' onClick={addScore}><p class={'-ml-2'}>3</p></button>
                        <button class={`h-6 w-2 -top-6 right-24 px-4 absolute ${boxStyling}`} id='addToPlayer2' onClick={addScore}><p class={'-ml-2'}>5</p></button>
                    </div>
                </div>
            </div>
            <div class='mb-0'>
                <button class={`h-12 px-4 ${boxStyling}`} onClick={pauseGame}>{pause ? 'Unpause game' : 'Pause game'}</button>
            </div>
            
            </div>
        </div>
    )
}

export default Question