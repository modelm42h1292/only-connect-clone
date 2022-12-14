import { useState } from 'react'
import Menu from './components/Menu'
import Question from './components/Question'
import Endscreen from './components/Endscreen'

function App() {
  
  const [playerNames, setPlayerNames] = useState({
    player1: '',
    player2: ''
  })



  const changePlayerName = (newname) => {
    console.log(newname)    
    setPlayerNames(newname)
  }


  function navigatePages () {
    setVisible(page => pages[(pages.indexOf(page) + 1)])
  }

  function toMainMenu () {
    setVisible(pages[0])
  }

  const pages = [
    1, 2, 3
  ]

  const [isVisible, setVisible] = useState(pages[0])

  return (
    <div className="App">
      {isVisible == 1 && <Menu navigatePages={navigatePages} handleChange={changePlayerName} playerNames={playerNames}/>}
      {isVisible == 2 && <Question navigatePages={navigatePages} toMainMenu={toMainMenu} playerNames={playerNames}/>}
      {isVisible == 3 && <Endscreen toMainMenu={toMainMenu}/>}
    </div>
  )
}

export default App
