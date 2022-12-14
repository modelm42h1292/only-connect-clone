import { useState } from 'react'
import Menu from './components/Menu'
import Question from './components/Question'
import Endscreen from './components/Endscreen'

function App() {
  
  const [playerNames, setPlayerNames] = useState({
    player1: '',
    player2: ''
  })

  const [playerScore, setPlayerScore] = useState({
    player1: 0,
    player2: 0
  })
  const [lang, setLang] = useState('eng')

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
      {isVisible == 1 && <Menu navigatePages={navigatePages} handleChange={setPlayerNames} playerNames={playerNames} lang={lang} setLang={setLang}/>}
      {isVisible == 2 && <Question navigatePages={navigatePages} toMainMenu={toMainMenu} playerNames={playerNames} setPlayerScore={setPlayerScore} playerScore={playerScore} lang={lang}/>}
      {isVisible == 3 && <Endscreen toMainMenu={toMainMenu} playerScore={playerScore} playerNames={playerNames} setPlayerScore={setPlayerScore}/>}
    </div>
  )
}

export default App
